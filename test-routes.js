const appRoutes = [
  { path: "/career" },
  { path: "/store/*" },
  { path: "/lostlicense" },
  { path: "/" },
  { path: "/boom3D" },
];

const lang = 'de';

for (const route of appRoutes) {
  const generatedPath = `/:lang${route.path === '/' ? '' : route.path}`;
  console.log(`Original: ${route.path} -> Generated: ${generatedPath}`);
}
