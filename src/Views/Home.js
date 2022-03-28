import React, {Component} from "react";
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


class Home extends Component {
   render () {
    return (
      <div className="body">
              <MainPage/>
              <Sidebar/>
              <Api/>
              <Selector />
              <Utilities />
              <Cards />
              <Layout />
              <About />
              <BlackPage />
              <Footer />
    
     </div>
    );
   }
}

export default Home;
