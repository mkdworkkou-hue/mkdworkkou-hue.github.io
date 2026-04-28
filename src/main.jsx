import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import SelfIntroductionPage from "./SelfIntroductionPage.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelfIntroductionPage />
  </React.StrictMode>
);
