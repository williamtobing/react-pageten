import React, { useState, useEffect } from "react";

export default function MyComponent(props) {
  const [name, setName] = useState("John");

  useEffect(() => {
    document.title = name;
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section style={{ textAlign: "center", margin: "10px" }}>
      <span>Window Width: {width}</span>
      <br />
      <input value={name} onChange={handleNameChange} />
    </section>
  );
}
