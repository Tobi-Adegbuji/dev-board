import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  //Used to push user into store
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name.");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginApp = (e) => {
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="outlined-basic"
            placeholder="Profile Pic URL (optional)"
            type="text"
            onChange={(e) => setProfilePic(e.target.value)}
            value={profilePic}
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            mb={5}
            id="outlined-basic"
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="outlined-basic"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
