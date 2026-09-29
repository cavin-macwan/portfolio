import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () => [
    { source: "/projects", destination: "/#work", permanent: true },
    { source: "/articles/why-kotlin-uses-coroutines.png", destination: "/articles/why-kotlin-uses-coroutines-code.png", permanent: true },
    { source: "/articles/master-permission-handling-in-jetpack-compose.png", destination: "/articles/master-permission-handling-in-jetpack-compose-code.png", permanent: true },
    { source: "/articles/why-kotlin-uses-coroutines-cover.png", destination: "/articles/why-kotlin-uses-coroutines-code.png", permanent: true },
    { source: "/articles/master-permission-handling-in-jetpack-compose-cover.png", destination: "/articles/master-permission-handling-in-jetpack-compose-code.png", permanent: true },
  ],
};

export default nextConfig;
