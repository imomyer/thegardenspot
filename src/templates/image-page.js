import React from "react";
import { Link, graphql } from "gatsby";

const GeneralImagePage = ({data}) => {
    const image = data.imagesJson;
    return (
      <main className="image-page">
        <div className="title-container"><h1>THE GARDEN SPOT</h1><span><Link to='/'>back</Link></span></div>
        <div className="content-container">
          <div className="image-container">
            <img
              src={`../../${image.fileName}`}
              alt={image.title}
            />
          </div>
        </div>
      </main>
    )
}

export const query = graphql`
  query ($slug: String!) {
    imagesJson(slug: { eq: $slug }) {
      title
      fileName
    }
  }
`;

export default GeneralImagePage;