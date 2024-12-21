import React from "react";

type ScrollProps = {
  children: React.ReactNode
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
