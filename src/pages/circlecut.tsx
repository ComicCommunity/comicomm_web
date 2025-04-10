import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import menue from "../components/menue/index"
import "../styles/circlecut.scss"
import { link } from "fs"
import { NULL } from "sass"
import EmbedPdf from "../components/embed-pdf"

export const query = graphql`
query Circlecuts{
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
  const imgArray = data.allFile?.group
  const imgList = imgArray.map(({ edges }) => {
    var image = null
    var text = null

    edges.map(({ node }) => {
      if (node.childMarkdownRemark != null) {
        text = node
      }
      else if (node.childImageSharp != null) {
        image = node
      }
    })

    var res

    if (image == null) { // 画像ファイルがおかしい
      res = null
    } else if (text == null) { // 説明文なし
      res =
        <li key={image.ino}>
          <GatsbyImage
            image={getImage(image)}
            alt={image.name}
          />
        </li>
    } else {
      res =
        <li key={image.ino}>
          <GatsbyImage
            image={getImage(image)}
            alt={image.name}
          />
          <div className="decsription">
            <h2 className="cname">{text.childMarkdownRemark.frontmatter.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }} />
          </div>
        </li>
    }

    return res
  })

  return (
    <main>
      {menue}
      <h1>CC07参加サークル一覧</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>CC07参加サークル一覧</title>
