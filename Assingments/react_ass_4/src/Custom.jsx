import React from "react";

const Custom = ({ htmlElementName, style, innerHTML }) => {
  const Tag = htmlElementName;
  return <Tag style={style}>{innerHTML}</Tag>;
};

export default Custom;
