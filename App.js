import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header/header";
import RestCard from "./src/components/body/restrauntCard";
import "./app.css";
import data from "./src/components/utils/output.json";
import { useState, useEffect } from "react";
import { REAL_FOOD_API } from "./src/components/utils/common";
import Spinner from "react-spinner-material";
import RestShimmer from "./src/components/body/restrauntShimmer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppRoutes from "./src/components/utils/routes";
import About from "./src/components/body/about";
import ErrorComp from "./src/components/body/error";
import Contact from "./src/components/body/contact";
import RestrauntMenu from "./src/components/body/restrauntMenu";
import Body from "./src/components/body/body";
import UserClass from "./src/components/body/userClass";


const App = () => {
  
  return (
    <>
      <Header />
       <Outlet/>
    </>
  );
};

const appRouter=createBrowserRouter([
  
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorComp/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {path:'/about/user',
        element:<UserClass name={"Abhijeet"}/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restraunt/:restId',
        element:<RestrauntMenu/>
      },
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/restaurant/:resId'
      }
    ]
  }
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
