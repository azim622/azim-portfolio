import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Components/Home";
import LayOutMain from "./Components/LayOutMain";
import MyProject from "./Components/MyProject";
import ViewMore from "./Components/ViewMore";
import AboutMe from "./Components/AboutMe";
import ContractInfo from "./Components/ContractInfo";
import Skill from "./Components/Skill";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOutMain></LayOutMain>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/project',
            element:<MyProject></MyProject>
        },
        {
            path:'/projectDetails/:id',
            element:<ViewMore></ViewMore>
        },
        {
            path:'/about',
            element:<AboutMe></AboutMe>
        },
        {
            path:'/skill',
            element:<Skill></Skill>
        },
        
        {
            path:'/contract',
            element:<ContractInfo></ContractInfo>
        },

      ]
    },
  ]);