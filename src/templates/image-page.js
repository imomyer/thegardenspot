import React from "react";
import { Link, graphql } from "gatsby";

const GeneralImagePage = ({data}) => {
    const image = data.imagesJson;
    return (
      <main class="image-page">
        <div class="title-container"><h1>THE GARDEN SPOT</h1><span><Link to='/'>back</Link></span></div>
        <div class="content-container">
          <div class="image-container">
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