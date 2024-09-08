import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../../component/Login";
import SignUp from "../../component/SignUp";
import ErrorPage from "../../component/ErrorPage";
import Home from "../Home";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../Profile";
import Post from "../Post";
import Header from "../Header";

function RouterComponent() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={
            <ProtectedRoute><Home/></ProtectedRoute>
          } />
          {/* <Route path="/profile" element={
            <ProtectedRoute><Profile/></ProtectedRoute>
          } /> */}
           <Route path="/post" element={
            <ProtectedRoute><Post/></ProtectedRoute>
          } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterComponent;
