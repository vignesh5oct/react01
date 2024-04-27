import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../utils/UserContext";


const AppLayout = () => {


  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Default",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>


  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        }
      ],
      errorElement: <Error />
    },
  ]
);


const app = ReactDOM.createRoot(document.getElementById("app-layout"));
// app.render(<AppLayout />);

app.render(<RouterProvider router={appRouter} />)


