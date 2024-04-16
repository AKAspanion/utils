module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/utils/docs",
      destination: `/utils/docs/index.html`,
    },
    {
      source: "/utils/docs/docs",
      destination: `/utils/docs/index.html`,
    },
    {
      source: "/date-time/docs",
      destination: `/date-time/docs/index.html`,
    },
    {
      source: "/date-time/docs/docs",
      destination: `/date-time/docs/index.html`,
    },
    {
      source: "/react-hooks/docs",
      destination: `/react-hooks/docs/index.html`,
    },
    {
      source: "/react-hooks/docs/docs",
      destination: `/react-hooks/docs/index.html`,
    },
    {
      source: "/utils/report",
      destination: `/utils/report/index.html`,
    },
    {
      source: "/utils/report/report",
      destination: `/utils/report/index.html`,
    },
    {
      source: "/date-time/report",
      destination: `/date-time/report/index.html`,
    },
    {
      source: "/date-time/report/report",
      destination: `/date-time/report/index.html`,
    },
    {
      source: "/react-hooks/report",
      destination: `/react-hooks/report/index.html`,
    },
    {
      source: "/react-hooks/report/report",
      destination: `/react-hooks/report/index.html`,
    },
  ],
};
