import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./pages/test";
import CreateTask from "./pages/addTask";
import UpdateTask from "./pages/editTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/add-task" element={ <CreateTask/>} />
        <Route path="/edit-task/:id" element={ <UpdateTask/> } />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
