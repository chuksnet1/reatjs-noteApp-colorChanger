import React, { useEffect, useState } from "react";
import "./entry.css";

function Entry(props) {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState({
    title: "",
    content: "cosole theat is highest",
  });

  function handleText(event) {
    const { name, value } = event.target;
    setVal((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function saveText(event) {
    if (val.content === "") {
      return;
    }
    props.catchText(val);
    setVal({
      title: "",
      content: "",
    });
  }

  return (
    <>
      <div style={props.colorStyle} className="text-container">
        <input
          value={val.title}
          name="title"
          onChange={handleText}
          onClick={()=>setShow(true)}
          placeholder="ENter the title"
        ></input>
        {/* to display text area on seting show to true */}
        {show? <textarea
          value={val.content}
          name="content"
          onChange={handleText}
          placeholder="Enter your note"
          rows={6}
          cols={30}
        ></textarea>: null}
        
        <button onClick={() => saveText()}>SAVE Text</button>
      </div>
    </>
  );
}

export default Entry;
