import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe/Recipe";
import Login from "./pages/Login/Login";
import "./App.css";
import ShowRecipe from "./pages/Show Recipe/ShowRecipe";
import { MyBlogs } from "./pages/Blogs/MyBlogs";
import { ShowBlogs } from "./pages/Show Blogs/ShowBlogs";
import { Contact } from "./pages/contactUs/Contact";
import Home from "./pages/Home/Home";
import AddRecipe from "../src/Components/Form/AddRecipe";
import AddBlog from "../src/Components/Form/AddBlog";
import Profile from "./pages/Profile/Profile";
import MyNav from "./Components/Navbar/MyNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Wrongurl from "./Components/Wrongurl/Wrongurl";

const App = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserInfo = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchUserInfo();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Router>
        <MyNav user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe searchQuery={searchQuery} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/showRecipe/:id"
            element={user ? <ShowRecipe /> : <Login />}
          />
          <Route path="/blogs" element={<MyBlogs searchQuery={searchQuery} />} />
          <Route
            path="/showBlogs/:id"
            element={user ? <ShowBlogs /> : <Login />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addrecipe" element={user ? <AddRecipe /> : <Login />} />
          <Route path="/addblog" element={user ? <AddBlog /> : <Login />} />
          <Route path="profile/:id" element={<Profile user={user} />} />
          <Route path="*" element={<Wrongurl />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
