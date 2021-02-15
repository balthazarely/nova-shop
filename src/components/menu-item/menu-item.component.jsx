import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// WithRouter is a HOC that will give us access to router related things... such as location, match and history. not bad for 2 lines of code. 'History' has been added to the props of the MenuItem below;

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
