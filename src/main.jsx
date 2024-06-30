import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import PersonalData from './components/PersonalData/PersonalData.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <ProtectedRoute>
          <div>I am about</div>
        </ProtectedRoute>
      },
      {
        path: "/personalData",
        element:<PrivateRoute>
          <PersonalData ></PersonalData>
        </PrivateRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
