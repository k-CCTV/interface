import "./css/RouterStation.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import StatusPage from "./pages/StatusPage";
import DetailPage from "./pages/DetailPage";
import ModifyPage from "./pages/ModifyPage";
function RouterStation() {
  return (
    <div className="routerStation">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/board/:id" element={<DetailPage />} />
        <Route path="/modify/:id" element={<ModifyPage />} />
        <Route path="/status/:str" element={<StatusPage />} />
      </Routes>
    </div>
  );
}

export default RouterStation;
