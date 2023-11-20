'use client';
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
});

// interface MermaidProps {
//   chart: string;
// }


const Mermaid  = ({chart}: any) => {

  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
