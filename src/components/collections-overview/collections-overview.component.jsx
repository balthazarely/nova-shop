import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateFromProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateFromProps)(CollectionsOverview);
