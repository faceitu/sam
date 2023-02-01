import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsDashboard from './modules/products/ProductsDashboard';
import UomDashboard from './modules/products/uom/UomDashboard';
import Newproduct from './modules/products/Newproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0Provider
        domain="sam-prod.us.auth0.com"
        clientId="lU0vXX8PCV6A9Svzr76qZactn7T6lhsl"
        redirectUri={window.location.origin}
        audience="https://sam-api.lepis.ar/"
      >
        <App />
      </Auth0Provider>
    ),
    children: [
      {
        path: "products",
        element: <ProductsDashboard />,
      },
      {
        path: "uom",
        element: <UomDashboard />,
      },
      {
        path: "newproducts",
        element: <Newproduct />,
      },
    ]
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
