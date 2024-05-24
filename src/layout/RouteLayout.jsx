import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Events from "../components/Events";
import Login from "../components/Login";
import { useAuth } from "../context/AuthContext";
const RouteLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<Events />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </Router>
    </>
  );
};

export default RouteLayout;
