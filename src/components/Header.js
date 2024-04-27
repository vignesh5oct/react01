import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  

  return (
    <div className="m-1 flex justify-between bg-gray-light shadow-xl">
      <div>
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center text-lg ">
        <ul className="flex p-8 m-4">
          <li className="px-4">{onlineStatus ? "✅ Online" : "❌ Disconnected"}</li>
          <li className="px-4"><Link to={"/"}>Home</Link></li>
          <li className="px-4"><Link to={"/about"}>About</Link></li>
          <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
          <li className="px-4">{loggedInUser}</li>
          <button className="px-4 " onClick={() => {
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;