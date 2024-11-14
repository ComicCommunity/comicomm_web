import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import menue from "../components/menue/index"
import "../styles/circlecut.scss"

import EmbedPdf from "../components/embed-pdf"

// export const query = graphql`
// query CirclecutsPdf{
//   allFile(
//     filter: {sourceInstanceName: {eq: "content"}, relativeDirectory: {glob: "circlecut/**"}}
//   ) {
//     group(field: {relativeDirectory: SELECT}) {
//       edges {
//         node {
//           name
//           ino
//           childImageSharp {
//             gatsbyImageData(
//               width: 720
//               height: 405
//               transformOptions: {fit: FILL})
//           }
//           childMarkdownRemark {
//             frontmatter{
//               name
//             }
//             html
//           }
//         }
//       }
//     }
//   }
// }`

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      {menue}
      <h1>CC06参加サークル詳細</h1>
      <img src="/images/CC06_circlelist_omote.png" alt="CC06参加サークル一覧表" width="100%"/>
      <img src="/images/CC06_circlelist_ura.png" alt="CC06参加サークル一覧表" width="100%" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CC06参加サークル詳細</title>
