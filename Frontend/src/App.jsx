import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe/Recipe";
import Login from "./pages/Login/Login";
import "./App.css";
import ShowRecipe from "./pages/Show Recipe/ShowRecipe";
import { MyBlogs } from "./pages/Blogs/MyBlogs";
import { ShowBlogs } from "./pages/Show Blogs/ShowBlogs";
import { Contact } from "./pages/contactUs/Contact";
import Home from "./pages/Home/Home";
import AddRecipe from "./Components/Form/AddRecipe";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:id" element={<ShowRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/showRecipe" element={<ShowRecipe />} />
          <Route path="/blogs" element={<MyBlogs />} />
          <Route path="/showBlogs" element={<ShowBlogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add" element={<AddRecipe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
