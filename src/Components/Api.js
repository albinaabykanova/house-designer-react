import React, {Component} from "react";
import {Col,Row,Button, div}  from "react-bootstrap";
import '../Assets/css/Api.css';
import { FaFacebookF,FaLinkedinIn,FaYoutube,FaPinterestSquare  } from 'react-icons/fa';

export default class Api extends Component {
   render () {
    return (
        <Row className="api-img">
            <div className="foto-api">
                <h2 className="title-api">Выбрать плитку легко</h2>
                <p className="desk-api">Попробуйте наш конструктор.<br/> Всего 2 шага и вы увидите как может<br/>выглядеть плитка в интерьере.</p>
                    <Button variant="danger" className="red">Начать</Button> 
            </div>
        </Row>
   
  
    );
   }
}
 


