import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages";
import Dashboard from "../pages/dashboard";
import MainDashboard from "../pages/dashboard/main/MainDashboard";
import ManageThread from "../pages/dashboard/threads/ManageThread";
import DetailReport from "../pages/dashboard/detailreport/DetailReport";
import TopicMain from "../pages/dashboard/topic/TopicMain";
import ManageUsers from "../pages/dashboard/users/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const RouteConfiguration = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MainDashboard />} />
            <Route path="topic" element={<TopicMain />} />
            <Route path="thread" element={<ManageThread />} />
            <Route path="thread/details/:id" element={<DetailReport />}/>
            <Route path="users" element={<ManageUsers />} />
            <Route path="users/details/:id" element={<DetailReport />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfiguration;
