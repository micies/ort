import React from "react";
import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/users";




export default function App() {

 return (
   <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Users />}  />
          <Route path="/users" element={<Users />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
};
