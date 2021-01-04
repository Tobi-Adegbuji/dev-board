import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = () => {};
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://raw.githubusercontent.com/Tobi-Adegbuji/dev-board/main/07cd298a-2b1b-484b-9284-bb64b6117471_200x200.png"
        alt=""
      />

      <form>
        <Box mb={3}>
          <TextField
            id="outlined-basic"
            placeholder="Full Name (Required)"
            type="text"
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="outlined-basic"
            placeholder="Profile Pic URL (optional)"
            type="text"
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            mb={5}
            id="outlined-basic"
            placeholder="Email"
            type="email"
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="outlined-basic"
            placeholder="Password"
            type="password"
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <Button
            className="login__button"
            variant="outlined"
            type="submit"
            onClick={login}
          >
            Login
          </Button>
        </Box>
      </form>
      <p>Don't have an account? </p>
      <span className="login__register" onClick={register}>
        <Typography>Sign Up</Typography>
      </span>
    </div>
  );
}

export default Login;
