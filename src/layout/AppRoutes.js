import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<h1 style={{ marginTop: "100px" }}>PAGE NOT FOUND</h1>}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
