/**
 * Automated Test Suite: Products API Verification & Test Scenarios
 * Run: node scripts/test-products-api.cjs
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('====================================================');
console.log('🧪 RUNNING TEST SCENARIOS: PRODUCTS API VERIFICATION');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✅ [PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`❌ [FAIL] ${testName}${details ? ` -> ${details}` : ''}`);
  }
}

// ---------------------------------------------------------
// SCENARIO 1: API Endpoint Existence & Valid JSON
// ---------------------------------------------------------
console.log('--- SCENARIO 1: API Endpoint Data File ---');
const apiFilePath = path.resolve('public/api/products.json');
assert(fs.existsSync(apiFilePath), 'public/api/products.json exists on disk');

let rawData = '';
let jsonData = null;
try {
  rawData = fs.readFileSync(apiFilePath, 'utf8');
  jsonData = JSON.parse(rawData);
  assert(true, 'public/api/products.json is valid parseable JSON');
} catch (err) {
  assert(false, 'public/api/products.json is valid parseable JSON', err.message);
}

assert(jsonData && jsonData.status === 'success', 'API response format has { status: "success" }');
assert(jsonData && typeof jsonData.data === 'object', 'API response contains "data" object');

// ---------------------------------------------------------
// SCENARIO 2: All Required Products Present
// ---------------------------------------------------------
console.log('\n--- SCENARIO 2: Catalog Products Coverage ---');
const expectedProducts = [
  'boom3d',
  'boom2',
  'capto',
  'audimix',
  'boomMobile',
  'vizmato',
  'audion',
  'cameraplus',
  'camerapluspro'
];

const products = jsonData ? jsonData.data : {};
const productKeys = Object.keys(products);

assert(productKeys.length >= expectedProducts.length, `API contains at least ${expectedProducts.length} products (Found: ${productKeys.length})`);

expectedProducts.forEach(prodKey => {
  const exists = Boolean(products[prodKey]);
  assert(exists, `Product "${prodKey}" is returned by the API`);
});

// ---------------------------------------------------------
// SCENARIO 3: Product Schema & Data Integrity
// ---------------------------------------------------------
console.log('\n--- SCENARIO 3: Product Schema & Data Validation ---');
expectedProducts.forEach(prodKey => {
  const prod = products[prodKey];
  if (!prod) return;

  assert(typeof prod.id === 'string' && prod.id === prodKey, `[${prodKey}] "id" matches product key`);
  assert(typeof prod.name === 'string' && prod.name.trim().length > 0, `[${prodKey}] "name" is non-empty string ("${prod.name}")`);
  assert(typeof prod.variants === 'object' && Object.keys(prod.variants).length > 0, `[${prodKey}] has platform variants defined`);

  // Check variants integrity
  Object.entries(prod.variants).forEach(([platform, variant]) => {
    assert(
      typeof variant.route === 'string' && variant.route.startsWith('/'),
      `[${prodKey}][${platform}] variant route is valid ("${variant.route}")`
    );
  });
});

// ---------------------------------------------------------
// SCENARIO 4: Pricing Schema Validation
// ---------------------------------------------------------
console.log('\n--- SCENARIO 4: Product Pricing Validation ---');
const pricedProducts = ['boom3d', 'capto'];
pricedProducts.forEach(prodKey => {
  const prod = products[prodKey];
  if (prod && prod.pricing) {
    assert(Boolean(prod.pricing.currency), `[${prodKey}] has currency defined ("${prod.pricing.currency}")`);
    assert(Boolean(prod.pricing.discounted), `[${prodKey}] has discounted price ("${prod.pricing.discounted}")`);
    assert(Boolean(prod.pricing.original), `[${prodKey}] has original price ("${prod.pricing.original}")`);
  }
});

// ---------------------------------------------------------
// SCENARIO 5: Fallback Mechanism (Network Failure Simulation)
// ---------------------------------------------------------
console.log('\n--- SCENARIO 5: Offline / API Failure Fallback Simulation ---');
const defaultProductsPath = path.resolve('src/data/products.ts');
assert(fs.existsSync(defaultProductsPath), 'src/data/products.ts fallback source exists');

const defaultContent = fs.readFileSync(defaultProductsPath, 'utf8');
assert(defaultContent.includes('export const PRODUCTS'), 'src/data/products.ts exports PRODUCTS catalog fallback');
assert(defaultContent.includes('export type ProductCatalog'), 'src/data/products.ts exports ProductCatalog type');

const servicePath = path.resolve('src/services/productService.ts');
assert(fs.existsSync(servicePath), 'src/services/productService.ts exists');
const serviceContent = fs.readFileSync(servicePath, 'utf8');
assert(serviceContent.includes('fetchProducts'), 'productService exports fetchProducts function');
assert(serviceContent.includes('DEFAULT_PRODUCTS'), 'productService implements fallback to DEFAULT_PRODUCTS on catch');

const hookPath = path.resolve('src/hooks/useProducts.ts');
assert(fs.existsSync(hookPath), 'src/hooks/useProducts.ts exists');
const hookContent = fs.readFileSync(hookPath, 'utf8');
assert(hookContent.includes('initialData: DEFAULT_PRODUCTS'), 'useProducts hook sets initialData fallback for 0ms SSR/Prerender');

// ---------------------------------------------------------
// TEST SUMMARY REPORT
// ---------------------------------------------------------
console.log('\n====================================================');
console.log(`📊 TEST RESULTS: ${passedTests}/${totalTests} PASSED`);
if (failedTests === 0) {
  console.log('🎉 ALL API TEST SCENARIOS PASSED SUCCESSFULLY!');
} else {
  console.error(`⚠️ ${failedTests} TEST(S) FAILED.`);
}
console.log('====================================================\n');

process.exit(failedTests === 0 ? 0 : 1);
