import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const theme = createTheme();

const Register = () => {
  const [data, setdata] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (item) => {
    var newData = data;
    newData.push(item);
    setdata([...data], newData);
    console.log("5555", item);
    var Data = JSON.parse(localStorage.getItem("111")) || [];
    var isData =
      Data.findIndex((x) => {
        return x.email === item.email;
      }) !== -1;
    if (isData) {
      toast.error("This Email number already exists!!");
    } else {
      localStorage.setItem("111", JSON.stringify(data));
    }
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline/>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                {...register("email", { required: true })}
              />
              {errors.email && <p> email is required.</p>}
              <br></br>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoFocus
                {...register("password", { required: true })}
              />
              {errors.password && <p> password is required.</p>}
              <br></br>
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="name"
                type="text"
                id="text"
                autoFocus
                {...register("name", { required: true })}
              />
              {errors.name && <p> name is required.</p>}
              <br></br>

              <TextField
                margin="normal"
                required
                fullWidth
                name="last"
                label="last name"
                type="text"
                id="password"
                autoFocus
                {...register("last", { required: true })}
              />
              {errors.last && <p> last is required.</p>}
              <br></br>
             <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link to="Login" variant="body2">
                    {"already register Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Register;

