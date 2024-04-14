import { Dashboard } from "./views/Dashboard.tsx";
import { Route, Routes } from "react-router-dom";
import Stats from "./views/Stats.tsx";
import Auditor from "./components/Auditor.tsx";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/statistics" element={<Stats />} />
      <Route path="audit" element={<Auditor />} />
    </Routes>
  );
}