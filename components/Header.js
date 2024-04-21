import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <div component="nav">
        <img className="logo" src={LOGO_URL}></img> 

      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "✅ Online" : "❌ Disconnected"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Cart</li>
          <button variant="contained" onClick={() => {
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}>{btnLogin}</button>
        </ul>
      </div> 
    </div>
  );
};


export default Header;