import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="repositories" element={<Repositories />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
