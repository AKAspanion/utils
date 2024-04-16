module.exports = {
  reactStrictMode: true,
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
  ],
};
