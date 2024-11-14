import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import menue from "../components/menue/index"
import "../styles/circlecut.scss"

import EmbedPdf from "../components/embed-pdf"

export const query = graphql`
query CirclecutsPdf{
  allFile(
    filter: {sourceInstanceName: {eq: "content"}, relativeDirectory: {glob: "circlecut/**"}}
  ) {
    group(field: {relativeDirectory: SELECT}) {
      edges {
        node {
          name
          ino
          childImageSharp {
            gatsbyImageData(
              width: 720
              height: 405
              transformOptions: {fit: FILL})
          }
          childMarkdownRemark {
            frontmatter{
              name
            }
            html
          }
        }
      }
    }
  }
}`

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      {menue}
      <h1>CC06参加サークル一覧（PDF版）</h1>
      {/* <EmbedPdf src="/pdf/circlecut.pdf" width="100%" height="800px" /> */}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CC06参加サークル一覧（PDF版）</title>
