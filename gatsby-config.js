module.exports = {
    siteMetadata: {
        siteUrl: 'https://gatsby-weather-app.pages.dev/',
    },
    plugins: [{
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: 'GatsbyJS',
            short_name: 'GatsbyJS',
            start_url: '/',
            background_color: '#f7f0eb',
            theme_color: '#a2466c',
            display: 'standalone',
            icon: 'src/images/icon.png', // This path is relative to the root of the site.
            cache_busting_mode: 'none',
        },
    },
        'gatsby-plugin-offline',
        'gatsby-plugin-postcss',
    ]
}