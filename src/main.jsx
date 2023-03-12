import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.scss';
import Home from './pages/Home/Home';
import Pay from './pages/Pay/Pay';
import {mock} from './mock/produtos.mock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home dados={mock} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay dados={mock} />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
