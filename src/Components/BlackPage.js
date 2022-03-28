import React, {Component} from "react";
import { Row, Col ,Button, InputGroup,FormControl, Form} from "react-bootstrap";
import '../Assets/css/BlackPage.css';
import Image from 'react-bootstrap/Image';
import { } from 'react-icons/fa';

export default class BlackPage extends Component {
  render () {
   return (
     <Row className="blackpage-body"> 
      
        <Col md={4}>
          <div className="mir" >
            <Image src={require('../Assets/img/mir.png')} className="black-foto" /> 
             <p className="title1-black">+7 707 744 05 04</p>
             <p className="black">Заказать обратный звонок</p>
             <p className="black">Написать нам сообщение</p>
          </div>
        </Col>
        <Col md={2}>
         <h5 className="title-black">Компания</h5>
         <p className="desk-black">О компании</p>
         <p className="desk-black">Контакты</p>
         <p className="desk-black">Новости</p>
         <p className="desk-black">Блог</p>
        </Col>  
        <Col md={2}>
         <h5 className="title-black">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h5>
         <p className="desk-black">Акции</p>
         <p className="desk-black">Бонусная программа</p>
         <p className="desk-black">Корпоративным клиентам</p>
         <p className="desk-black">Дизайнерам</p>
        </Col> 
        <Col md={2}>
         <h5 className="title-black">Покупателю</h5>
         <p className="desk-black">Доставка и оплата</p>
         <p className="desk-black">Гарантия и возврат</p>
         <p className="desk-black">Оплата</p>
        </Col> 
        <Col md={2}>
         <h5 className="title-black">Социальные сети</h5>
         <p className="desk-black">Facebook</p>
         <p className="desk-black">Instagram</p>
         <p className="desk-black">YouTube</p>
        </Col> 
      </Row>
    );
   }
}
 


