import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import menue from "../components/menue/index"
import "../styles/homepage.scss"

export const query = graphql`
query IndexPage {
  markdownRemark(frontmatter: {page: {eq: "toppage"}}) {
    html
  }
}`

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      {menue}
      <div className="top_innerbody">
        <div className="top_image">
          <StaticImage src="../../static/images/imagetop.png" alt="logo" placeholder="blurred" />
        </div>
        <div className="top_content" dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html }} />
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Comic Community</title>
