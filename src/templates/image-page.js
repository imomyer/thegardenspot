import React from "react";
import { Link, graphql } from "gatsby";

const GeneralImagePage = ({data, pageContext}) => {
    const item = data.imagesJson;
    let image = data.imagesJson;
    let imagePath = `../../${image.fileName}`;
    let imageTitle = image.title;
    let imageOrientation = image.orientation;

    console.log(imageOrientation)

    if (item.images) {
      image = data.imagesJson.images.filter((image) => image.slug === pageContext.slug)[0];
      imagePath = `../../../${image.fileName}`;
      imageOrientation = image.orientation;
    }

    return (
      <main className="image-page">
        <div className="title-container"><h1>THE GARDEN SPOT</h1><span><Link to='/'>back</Link></span></div>
        <div className="content-container">
          <div className="image-container">
            <img
              src={imagePath}
              alt={imageTitle}
              className={imageOrientation}
            />
          </div>
        </div>
      </main>
    )
}

export const query = graphql`
  query ($itemID: String!) {
    imagesJson(itemID: { eq: $itemID }) {
      itemID
      title
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
`;

export default GeneralImagePage;