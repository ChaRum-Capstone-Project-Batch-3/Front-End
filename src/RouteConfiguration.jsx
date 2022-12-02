import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages";
import Dashboard from "./pages/dashboard";
import MainDashboard from "./pages/dashboard/main/MainDashboard";
import ManageThread from "./pages/dashboard/threads/ManageThread";
import TopicMain from "./pages/dashboard/topic/TopicMain";
import ManageUsers from "./pages/dashboard/users/ManageUsers";

const RouteConfiguration = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainDashboard />} />
          <Route path="topic" element={<TopicMain />} />
          <Route path="thread" element={<ManageThread />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfiguration;
