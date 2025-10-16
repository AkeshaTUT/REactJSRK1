import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Books from './pages/Books';
import AddBook from './pages/Add-Book';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
