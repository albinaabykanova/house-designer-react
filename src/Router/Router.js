import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
      import Home from "../Views/Home";
      import MainPage from "../Components/MainPage";
      import Sidebar from "../Components/Sidebar";
      import Api from "../Components/Api"; 
      import Selector from "../Components/Selector";
      import Utilities from "../Components/Utilities";
      import Cards from "../Components/Cards";
      import Layout from "../Components/Layout";
      import About from "../Components/About";
      import BlackPage from "../Components/BlackPage";
      import Footer from "../Components/Footer";

 export default function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Sidebar" element={<Sidebar/>} />
            <Route path="/Api" element={<Api/>} />
            <Route path="/Selector" element={<Selector/>} />
            <Route path="/Utilities" element={<Utilities/>} />
            <Route path="/Cards" element={<Cards/>} />
            <Route path="/Layout" element={<Layout/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/BlackPage" element={<BlackPage/>} />
            <Route path="/Footer" element={<Footer/>} />  
        </Routes>
    </Router>
  )
}

