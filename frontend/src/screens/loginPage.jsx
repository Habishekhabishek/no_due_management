import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Box,
  Stack,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../assets/logos.svg"; // Fixed import path
import LoginImage from "../assets/login_image.svg";

// Ensure you define your API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make POST request to backend login API
      const response = await axios.post(`${API_URL}/api/v1/login`, {
        email: email.trim(),
        password: password.trim()
      });

      console.log("Backend response:", response.data);

      // Navigate based on usertype
      const user = response.data.user;
      if (user) {
        switch (user.usertype) {
          case "student":
            navigate("/student-dashboard");
            break;
          case "staff":
            navigate("/staff-dashboard");
            break;
          case "COE":
            navigate("/coe-dashboard");
            break;
          default:
            navigate("/error");
            break;
        }
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      navigate("/error");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f8",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          px: 3,
          py: "100px",
          width: "100%",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={LoginImage}
                alt="Login Image"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ width: "100%", maxWidth: 400, mx: "auto", p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }} />
              </Box>
              <CardContent>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="h4">Login</Typography>
                </Stack>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                  sx={{ mt: 3 }}
                >
                  Login
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
