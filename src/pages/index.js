import * as React from "react"
import { Link, graphql } from "gatsby"

import '../styles/global.css'

const IndexPage = ({data}) => {
  return (
    <main className="index-page">
      <div className="title-container"><h1>THE GARDEN SPOT</h1></div>

      <div className="content-container">
        {data.allImagesJson.nodes.map((item, index) => (
          <div key={`wrapper-${index}`} className={item.images ? 'project' : 'singular'}>
            {item.images ? (
                item.images.map((subItem) => 
                  <div>
                    <Link to={`/images/${item.project}/${subItem.slug}`} key={subItem.slug}>
                      <img
                        src={`../../${subItem.fileName}`}
                        alt={subItem.title}
                        className={subItem.orientation}
                      />
                    </Link>
                  </div>
                  )
            ) : (
              <Link to={`/images/${item.slug}`}>
                <img
                  src={`../../${item.fileName}`}
                  alt={item.title}
                  className={item.orientation}
                />
              </Link>
            )}
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
        project
        orientation
        images {
          title
          slug
          fileName
          orientation
        }
      }
    }
  }
`;

export default IndexPage
