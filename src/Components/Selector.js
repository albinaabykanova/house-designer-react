import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";
import '../Assets/css/Selector.css';
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from 'react-icons/fa';


export default class Selector extends Component {
   render () {
    return (
     <Row className="selector-body">
       <Col md={6}>
            <h1 className="title-text">Превратите свои идеи <br/>  в реальность</h1>
            <Image src={require('../Assets/img/foto2.png')} className="selector-foto" />
       </Col>
       <Col md={6} className="selectors">
          <Row className="selector">
                <div className="title-select" >
                    1. Удобный заказ онлайн
                </div>
                <p className="desk-selector" >
                   Посчитать и заказать можно даже на сайте. Уникальный <br/>  дизайн в он-лайн конструкторе, и просчет 
                    количества <br/>с помощью калькулятора
                </p>
          </Row>
          <Row className="selector">
                <div className="title-select" >
                     2. Консультируем онлайн
                </div>
                <p className="desk-selector" >
                Мы готовы ответить на самые сложные вопросы, сделать <br/>  визуализацию и просчитать количество
                </p>
           </Row>
           <Row className="selector">
                <div className="title-select" >
                     3. Самый широкий выбор
                </div>
                <p className="desk-selector" >
                     Наш ассортимент в 10 раз больше конкурентов <br/> и постоянно обновляется. Весь товар в наличии
                </p>
                <div className="colored">
                    Подобрать плитку <FaArrowRight />
                </div>
           </Row>
         </Col>
     </Row>
    );
   }
}
 


