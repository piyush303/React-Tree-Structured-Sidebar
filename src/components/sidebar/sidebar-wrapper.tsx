import NodesList from "./nodes-list";
import { DATA } from "./data";

export default function SideBarWrapper() {
  return (
    <>
      <h1>React Tree Structured Sidebar</h1>
      <NodesList nodes={DATA} />
    </>
  );
}
