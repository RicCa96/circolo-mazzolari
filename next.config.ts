import type { NextConfig } from "next";

const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.api.sanity.io https://cdn.sanity.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload"},
  {key: "X-Content-Type-Options", value: "nosniff"},
  {key: "X-Frame-Options", value: "DENY"},
  {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
  {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"},
  {key: "Content-Security-Policy-Report-Only", value: cspReportOnly},
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [{source: "/(.*)", headers: securityHeaders}];
  },
};

export default nextConfig;
