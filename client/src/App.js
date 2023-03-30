import React from "react";
import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/users";
import UsersRedux from "./components/usersWithRedux/usersWithRedux";
import Box from "./components/users/box";




export default function App() {

 return (
   <div className="App">


      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Users />}  />
          <Route path="/users" element={<Users />} />
          <Route path="/usersRedux" element={<UsersRedux />} />
          <Route path="/box" element={<Box />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
};
