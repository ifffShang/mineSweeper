import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home";
import Rules from "./Rules";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route
    }from "react-router-dom"

import Difficulty from "./difficulty";
import EasyGame from "./components/easyGame";
import HardGame from "./components/hardGame";
import MidGame from "./components/midGame";
import EasyGameWrapper from "./components/easyGame/EasyGameWrapper";
import HardGameWrapper from "./components/hardGame/HardGameWrapper";
import MidGameWrapper from "./components/midGame/MidGameWrapper";

ReactDOM.render(<App />, document.getElementById("root"));
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>},
    {
        path:"/rules",
        element: <Rules/>},
     {
         path:'/difficulty',
         element: <Difficulty/>
         },
         {
            path:'/easyGame',
            element: <EasyGameWrapper/>
            },
            {
                path:'/midGame',
                element: <MidGameWrapper/>
                },
                {
                    path:'/hardGame',
                    element: <HardGameWrapper/>
                    }
         

  
    ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router ={router} />

  </StrictMode>,
)
