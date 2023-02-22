import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import NewsPage from "../../pages/NewsPage";
import ProfilePage from "../../pages/ProfilePage";
import RequireAuth from "../../components/RequireAuth/RequireAuth";
import Fallback from "../../components/Fallback/Fallback";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Fallback />} />
    </Routes>
  );
};

export default Routing;
