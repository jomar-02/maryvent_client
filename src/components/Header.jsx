import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { isAuthenticated, logoutUser, user } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {isAuthenticated ? `Welcome back, ${user?.username}` : "MaryVent"}
        </Typography>
        {isAuthenticated && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
