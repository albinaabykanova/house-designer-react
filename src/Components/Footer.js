import React, {Component} from "react";
import { Row, Col} from "react-bootstrap";
import '../Assets/css/Footer.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Footer extends Component {
  render () {
   return (
     <Row className="footer-body"> 
        <Col md={6}>   
           <p className="footer1">Мир Керамики © 2016 - 2021. Все права зарегистрированы.</p>
        </Col>

        <Col md={6}>   
           <p className="footer2">Пользовательское соглашение | Политика конфиденциальности</p>
        </Col>
     </Row>
    );
   }
}
 


