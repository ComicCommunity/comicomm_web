import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import menue from "../components/menue/index"
import "../styles/docpage.scss"
import { data } from "autoprefixer"

export const query = graphql`
query DocPage($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter{
        title
        date(formatString: "YYYY年MM月DD日")
    }
    html
  }
}`

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      {menue}
      <div className="doc_innerbody">
      <h1 className="doc_title">{data.markdownRemark?.frontmatter.title}</h1>
      <div className="doc_update">更新日 {data.markdownRemark?.frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html }} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = ({ data }: PageProps<Queries.IndexPageQuery>) =>
  <title>{data.markdownRemark?.frontmatter.title} : Commic Community</title>
