import React, {Component} from "react";
import { Row, Col ,Button, InputGroup,FormControl, Form} from "react-bootstrap";
import '../Assets/css/Layout.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class Layout  extends Component {
  render () {
   return (
     <Row className="layout-body"> 
      <Row className="p-0">
        <Col md={6}>
          <div className="">
            <Image src={require('../Assets/img/flower.png')} className="layout-foto" /> 
          </div>
        </Col>
        <Col md={6}>
          <h3 className="title-layout">- 20% скидки</h3>
          <h1 className="title-layout1">на онлайн заказ </h1>
          <p className="desk-layout">Подпишитесь на наши новости и акции и получите <br/> скидку на следующий заказ в интернет магазине</p>
          <InputGroup className="mb-1 "   style={{width: '60%'}} >
             <Form.Control className="pochta" placeholder="Ваша почта" />
          <InputGroup.Text className="layout3">Подписаться</InputGroup.Text>
          </InputGroup>
        </Col>  
      </Row>
      </Row>
    );
   }
}
 


