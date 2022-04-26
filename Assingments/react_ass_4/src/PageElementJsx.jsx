import React from "react";
import { pageElements } from "./data";
import Custom from "./Custom";

const PageElementsJsx = () => {
  return pageElements.map((element) => <Custom {...element} />);
};
export default PageElementsJsx;
