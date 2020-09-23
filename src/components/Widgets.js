import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://en.wikipedia.org/wiki/Facebook" //any link you want
        width="300"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
