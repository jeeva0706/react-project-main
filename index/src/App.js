// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Teachers from './Pages/Teachers';
import BlogList from './Pages/BlogList';
import BlogDetails from './Pages/BlogDetails';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import FirstPage from "./FirstPage";
import NavbarData from './NavbarData';
// import BackToTopButton from './Pages/Backtotop';

function App() {
  return (
    <Router>
      <div className="App">
        <FirstPage />
        <NavbarData />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <BackToTopButton /> */}
      </div>
    </Router>
  );
}

export default App;