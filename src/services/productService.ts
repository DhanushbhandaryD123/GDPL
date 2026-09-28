import axios from 'axios';
import { Product, ProductCatalog, PRODUCTS as DEFAULT_PRODUCTS } from '../data/products';

export interface ProductsApiResponse {
  status?: string;
  data?: Record<string, Product>;
}

// Configurable API URL via environment variable with fallback to local JSON endpoint
const PRODUCTS_API_ENDPOINT = import.meta.env.VITE_PRODUCTS_API_URL || '/api/products.json';

/**
 * Fetches all products from the backend REST API endpoint.
 * Falls back to DEFAULT_PRODUCTS if the network request fails or during offline/prerendering.
 */
export async function fetchProducts(): Promise<ProductCatalog> {
  try {
    const response = await axios.get<ProductsApiResponse | Record<string, Product>>(PRODUCTS_API_ENDPOINT, {
      timeout: 5000,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.data) {
      // Handles both wrapped { status: 'success', data: { ... } } and direct { boom3d: { ... } } responses
      if ('data' in response.data && response.data.data && typeof response.data.data === 'object') {
        return { ...DEFAULT_PRODUCTS, ...response.data.data } as ProductCatalog;
      }
      if (typeof response.data === 'object' && !('data' in response.data)) {
        return { ...DEFAULT_PRODUCTS, ...(response.data as Record<string, Product>) } as ProductCatalog;
      }
    }

    return DEFAULT_PRODUCTS;
  } catch (error) {
    // Graceful fallback to static product catalog
    console.warn('Could not fetch products from API, falling back to local catalog:', error);
    return DEFAULT_PRODUCTS;
  }
}

/**
 * Fetches a single product by its key or ID from the API.
 */
export async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products[id];
}
