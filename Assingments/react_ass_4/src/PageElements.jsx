import React from "react";
import { pageElements } from "./data";

const PageElements = () => {
  return [
    ...pageElements.map((element) =>
      React.createElement(
        element.htmlElementName,
        { style: element.style },
        element.innerHTML
      )
    ),
    React.createElement("h1", { style: { color: "grey" } }, "Hello"),
  ];
};
export default PageElements;
