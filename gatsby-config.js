module.exports = {
  siteMetadata: {
    title: "Gatsby Weather App",
    description: "Weather App made using GatsbyJS",
    author: "@erbit",
    siteUrl: "https://weather.erbit.me/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Weather",
        short_name: "Weather",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/icon.svg", // This path is relative to the root of the site.
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-leaflet",
    "gatsby-plugin-fontawesome-css",
  ],
};
