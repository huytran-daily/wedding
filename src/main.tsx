import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Prevent pinch zoom and all touch gestures that could trigger zoom
document.addEventListener("gesturestart", (e) => e.preventDefault(), {
  passive: false
});
document.addEventListener("gesturechange", (e) => e.preventDefault(), {
  passive: false
});
document.addEventListener("gestureend", (e) => e.preventDefault(), {
  passive: false
});

// Prevent wheel zoom
document.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
