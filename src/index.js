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
            element: <EasyGame/>
            },
            {
                path:'/midGame',
                element: <MidGame/>
                },
                {
                    path:'/hardGame',
                    element: <HardGame/>
                    }
         

  
    ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router ={router} />

  </StrictMode>,
)
