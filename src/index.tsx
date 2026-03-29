import { createRoot } from "react-dom/client";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import { App } from "./application/App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(document);
  root.render(<App />);
}
