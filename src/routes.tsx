import { Dashboard } from "./views/Dashboard.tsx";
import { Route, Routes } from "react-router-dom";
import Stats from "./views/Stats.tsx";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/statistics" element={<Stats />} />
    </Routes>
  );
}