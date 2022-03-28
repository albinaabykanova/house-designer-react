import React, {Component} from "react";
import { Row, Col ,Button, InputGroup,FormControl, Form} from "react-bootstrap";
import '../Assets/css/About.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class About  extends Component {
  render () {
   return (
     <Row className="about-body"> 
        <h3 className="title-about">Дизайнерский блог</h3>
        <p className="desk-about">Вдохновитесь полезными статьями <br /> от талантливых дизайнеров</p>
        <h6 className="title2-about">Читать блог</h6>
        <Col md={6}>
          <div className="">
            <Image src={require('../Assets/img/img7.png')} className="about-foto" /> 
              <p className="text-about1">Современная гостиная из старых вещей. <br/> Декор и оформление.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="">
            <Image src={require('../Assets/img/img6.png')} className="about1-foto" /> 
              <p className="text-about">Дизайн-советы по обустройству ванной</p> 
          </div>
        </Col>
    </Row>
    );
   }
}
 


