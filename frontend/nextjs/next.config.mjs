let withPWA = (config) => config;

try {
  const mod = await import("@ducanh2912/next-pwa");
  const withPWAInit = mod.default;
  withPWA = withPWAInit({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });
} catch {
  // next-pwa not available in production (pruned) — skip PWA
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'www.google.com' },
      { hostname: 'www.google-analytics.com' },
      { hostname: 'localhost' },
    ],
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
    return [{ source: '/outputs/:path*', destination: `${backendUrl}/outputs/:path*` }];
  },
};

export default withPWA(nextConfig);
