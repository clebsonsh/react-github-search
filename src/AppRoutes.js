import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repositories from "./Repositories";
import Home from "./Home";

const AppRoutes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="repositories" element={<Repositories />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
