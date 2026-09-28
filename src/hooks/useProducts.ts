import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { PRODUCTS as DEFAULT_PRODUCTS, Product, ProductCatalog, Platform, ProductPlatformVariant } from '../data/products';

/**
 * React hook to fetch all products from the API.
 * Uses TanStack React Query for caching, background revalidation, and zero-latency initial rendering.
 */
export function useProducts() {
  const query = useQuery<ProductCatalog>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialData: DEFAULT_PRODUCTS,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });

  return {
    products: query.data || DEFAULT_PRODUCTS,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

/**
 * Hook to retrieve a single product by key/id.
 */
export function useProduct(productId: string): Product | undefined {
  const { products } = useProducts();
  return products[productId] || DEFAULT_PRODUCTS[productId];
}

/**
 * Helper to safely extract variant from product
 */
export function getProductVariant(product: Product | undefined, platform: Platform): ProductPlatformVariant | undefined {
  return product?.variants?.[platform];
}
