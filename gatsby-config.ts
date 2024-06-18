import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Comic Community`,
    siteUrl: `https://comicomm.netlify.app/`,
    description: `NFオールジャンル同人誌即売会`,
    icon: `./static/images/favicon.png`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./static/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./content/"
      },
      __key: "content"
    }, {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    }, {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            backgroundColor: "none",
            maxWidth: 650
          }
        },
        ],
      },
    }, {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {

        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        // custom: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
        //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
        //     file: "/fonts/fontAwesome/css/all.min.css",
        //   },
        // ],

        /* Web fonts. File link should point to font CSS file. */
        web: [{
          /* Exact name of the font as defied in @font-face CSS rule */
          name: "Noto Sans JP",
          /* URL to the font CSS file with @font-face definition */
          file: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600",
        }, {
          /* Exact name of the font as defied in @font-face CSS rule */
          name: "Noto Serif JP",
          /* URL to the font CSS file with @font-face definition */
          file: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP",
        }
        ],
      },
    }
  ]
}

export default config;
