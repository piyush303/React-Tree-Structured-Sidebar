import { useState } from "react";

function Node({ node }: { node: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function clickHandler() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <li>
        <span onClick={clickHandler}>{">"}</span>
        <a href={node.link}>{node.label}</a>

        {node.children && isExpanded && <NodesList nodes={node.children} />}
      </li>
    </>
  );
}

export default function NodesList({ nodes }: { nodes: any }) {
  console.log(nodes);
  return (
    <>
      <ul>
        {nodes.map((node: any) => (
          <Node key={node.id} node={node} />
        ))}
      </ul>
    </>
  );
}
