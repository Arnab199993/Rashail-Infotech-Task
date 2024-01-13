import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const defaultState = {
    username: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(defaultState);
  // const [storedData, setStoredData] = useState("");
  // console.log("storedDataaaa", JSON.stringify(storedData));
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (loginData.username !== "" && loginData.password !== "") {
      try {
        const fetchLoginData = await fetch(
          "https://rsfpsoftware.gowild.co.in/dashboard/login/",
          {
            method: "POST",
            body: JSON.stringify({
              username: loginData.username,
              password: loginData.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await fetchLoginData.json();
        if (result.token) {
          // console.log("ress", result);
          localStorage.setItem("user", JSON.stringify(result));
          if (localStorage.getItem("user")) {
            navigate("/dashboard");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Log into your account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                placeholder="UserName"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <MailOutlineIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LockOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Log In
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/9835/be7a/ad4c3dfe442de77bdb9d78b75d099949?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MpdxVEPKQFiMLtwHr70j9i2kggredc50DMtRdkJ8OJqZzaFVlxwWQXScIII8CaU6kI9Zo3QnHKWi5oJamksetn4y-8SkB0oPt22OpN8AiKlPoV4vNzveuw-MobMzgiSrPjjMx2qkKTXuOeKCg~idsQ~d3LY8PABorj4UzObvJz5FmIptGfOTsPuc0KHvvjW7i8fJ3NlO7U5hHn2IRd6XjZK0MQysBQktxm6~Vkfx12QoGGHrvMo9suMFVFX3OcDQlX~RMdUEPzp5Totmtvl0yiczIWcvxH6w9wH5SUCejI0IrCfxh3yNYHPYlw3dNxJHMBRo00BMdsU8uwr58P6WtA__)",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
