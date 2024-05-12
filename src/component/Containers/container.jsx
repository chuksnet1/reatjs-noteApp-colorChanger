import React from "react";
import './container.css'

function Container(props) {

  console.log(props, "ghrtteh")
  return (
    <div className="dis-container">
      
      <p> title : {props.title}  </p>
      <p> content :  {props.content} </p>
    </div>
  );
}

export default Container;
