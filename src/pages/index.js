import * as React from "react"
import { Link, graphql } from "gatsby"

import '../styles/global.css'

const IndexPage = ({data}) => {
  return (
    <main class="index-page">
      <div class="title-container"><h1>THE GARDEN SPOT</h1></div>

      <div class="content-container">
        {data.allImagesJson.nodes.map((image) => (
        <div key={image.id}>
          <Link to={`/images/${image.slug}`}>
            <img
              class="landscape"
              src={`../../${image.fileName}`}
              alt={image.title}
            />
          </Link>
        </div>
        ))}
      </div>
    </main>
  )
}

export const query = graphql`
  query {
    allImagesJson {
      nodes {
        title
        slug
        fileName
      }
    }
  }
`;

export default IndexPage
