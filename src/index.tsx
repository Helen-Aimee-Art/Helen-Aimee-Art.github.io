import { createRoot } from "react-dom/client";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import { App } from "./application/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
