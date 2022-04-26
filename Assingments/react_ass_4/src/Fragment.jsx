import React from "react";

const Fragment = ({ showAlert, string }) => {
  return (
    <div>
      <h1>{string}</h1>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
};

export default Fragment;
