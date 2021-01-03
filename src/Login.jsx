import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://raw.githubusercontent.com/Tobi-Adegbuji/dev-board/main/07cd298a-2b1b-484b-9284-bb64b6117471_200x200.png"
        alt=""
      />

      <form>
        <input type="text" placeholder="Full Name (Required)" />
        <input type="text" placeholder="Profile Pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button variant="outlined">Login</Button>
      </form>
    </div>
  );
}

export default Login;
