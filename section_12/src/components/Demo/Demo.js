import React from "react";
import MyParagraph from "./MyParagraph";

function Demo(props) {
  console.log("Demo Output running");
  ;
  return <p>{props.show && "This is a paragraph"} <MyParagraph /></p>;
}

export default React.memo(Demo);
