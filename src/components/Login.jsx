import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://maryvent-server.onrender.com/api/auth/login",
        {
          username,
          password,
        }
      );

      const data = await response.data;

      loginUser(data.userInfo, data.token);
      if (loginUser) {
        navigate("/");
      }
    } catch (error) {
      // Handle error
      alert("Invalid Username or Password");
      console.error("Login failed:", error);
    }
  };

  return (
    <div sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
