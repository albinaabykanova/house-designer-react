import React, {Component} from "react";
import { Navbar, Nav, Row,Button } from "react-bootstrap";
import '../Assets/css/MainPage.css';
import { FaMapMarkerAlt,FaPhoneAlt,FaUserAlt } from 'react-icons/fa';




export default class MainPage extends Component {
   render () {
    return (
     <Row className="main align-items-center">
       <Row className="main-body">
        <>
         <Navbar bg="dark" variant="dark" className="mains">
           <Nav className="">
                <Nav.Link >О компании</Nav.Link>
                <Nav.Link >Достовки и оплата</Nav.Link>
                <Nav.Link >Гарантия и возврат</Nav.Link>
                <Nav.Link >Бонусная программа</Nav.Link>
                <Nav.Link className="aksi">Акции</Nav.Link>
                <Nav.Link className="naw"><FaMapMarkerAlt /> Наши магазины</Nav.Link>
                <Nav.Link > <FaPhoneAlt /> +77077440504</Nav.Link>
                <Nav.Link ><Button variant="light">KZ</Button> EN</Nav.Link>
                <Nav.Link ><FaUserAlt /> Личный кабинет</Nav.Link>
            </Nav>
          </Navbar>  
        </>
      </Row>
     </Row>
    );
   }
}


