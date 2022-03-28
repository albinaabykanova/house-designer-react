import React, {Component} from "react";
import { Navbar, Nav, Row,Button, Container, FormControl, Form} from "react-bootstrap";
import '../Assets/css/Sidebar.css';
import {FaBars,FaTh,FaSistrix,FaHeart,FaCartPlus  } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

export default class Sidebar extends Component {
   render () {
    return (
     <Row className="sidebar text-center ml-6">
       <Navbar >
          <Image src={require('../Assets/img/mir.png')} className="png-1" />
            <Nav className="">
                <Nav.Link className="katolog"><FaBars /> Каталог товаров</Nav.Link>
                <Nav.Link className="onlain"><FaTh />   Онлайн конструктор</Nav.Link>
            </Nav>
          <Form className="poisk d-flex">
            <FormControl className="search"
              type="search"
              placeholder="Поиск"/>
              <Button variant="danger"><FaSistrix /></Button>
         </Form>
         <div className="d-flex">
         <div className="heart">
            <FaHeart /><span className="two">2</span>
         </div>
        <div className="heart-2">
           <FaCartPlus /><span className="zero">0</span>
          </div>
        </div>
         
        
        </Navbar>
     </Row>
    );
   }
}
 


