import React, {Component} from "react";
import { Row, Col ,Button, Card } from "react-bootstrap";
import '../Assets/css/Cards.css';
import Image from 'react-bootstrap/Image';
import { FaHeartbeat, FaCartPlus} from 'react-icons/fa';


export default class Cards extends Component {
  render () {
   return (
     <Row className="car-body">
         <h2 className="title-cardy">Каталог товаров</h2>
        <Row className="prof-card d-flex p-5">
            <button className="dark1">Керамическая плитка</button>
            <button   variant="light" className="dark2">Паркет и ламинат</button>
            <button  className="dark3">Сантехника Grohe</button>
            <button type="button" className="dark4">Мебель для ванной</button>
            <button type="button" className="dark5">Ваны и душевые кабины</button>
            <button type="button" className="dark6">Свет</button>
            <button type="button" className="dark7">Двери</button>
            <button type="button" className="dark8">Обои</button>
            <button type="button" className="dark9">Инструменты</button>
          </Row>
      <Row className="p-0">
        <Col md={3}>
          <Card style={{padding:25,marginLeft:25}}>
           <div className="user d-flex  justify-content: space-between">
             <Button  className="danger-card danger">-17%</Button>
             <FaHeartbeat  className="icon-card"  />
           </div>
              <Card.Img  className="fotow"  variant="top"  src={require('../Assets/img/img1.png')}  />
               <Card.Body>
                 <Card.Title>
                    <h5 className="card-big">TWU09ADL414 D плитка одлицовочная Adelia 249*500*8.5</h5>
                   </Card.Title>
                  <Card.Text>
                     <p className="desk-card">Коллекция Adelia</p>
                 </Card.Text>
                 <p className="desk1">2 650 тг/кв.м</p>
                 <div className="user-1 d-flex  justify-content: space-between">
                   <p className="desk-red">2 275 тг/кв.м</p>
                   < FaCartPlus className="icon-card"  />
                 </div>
            </Card.Body>
          </Card>
        </Col> 
        <Col md={3}>
          <Card style={{padding:25,marginLeft:25}}>
           <div className="user d-flex  justify-content: space-between">
             <Button  className="danger-card danger">-17%</Button>
             <FaHeartbeat  className="icon-card"  />
           </div>
              <Card.Img  className="fotow"  variant="top"  src={require('../Assets/img/img2.png')}  />
               <Card.Body>
                 <Card.Title>
                    <h5 className="card-big">TWU09ADL414 D плитка одлицовочная Adelia 249*500*8.5</h5>
                   </Card.Title>
                  <Card.Text>
                     <p className="desk-card">Коллекция Adelia</p>
                 </Card.Text>
                 <p className="desk1">2 650 тг/кв.м</p>
                 <div className="user-1 d-flex  justify-content: space-between">
                   <p className="desk-red">2 275 тг/кв.м</p>
                   < FaCartPlus className="icon-card"  />
                 </div>
            </Card.Body>
          </Card>
        </Col> 
        <Col md={3}>
          <Card style={{padding:25,marginLeft:25}}>
           <div className="user d-flex  justify-content: space-between">
             <Button  className="danger-card danger">-17%</Button>
             <FaHeartbeat  className="icon-card"  />
           </div>
              <Card.Img  className="fotow"  variant="top"  src={require('../Assets/img/img3.png')}  />
               <Card.Body>
                 <Card.Title>
                    <h5 className="card-big">TWU09ADL414 D плитка одлицовочная Adelia 249*500*8.5</h5>
                   </Card.Title>
                  <Card.Text>
                     <p className="desk-card">Коллекция Adelia</p>
                 </Card.Text>
                 <p className="desk1">2 650 тг/кв.м</p>
                 <div className="user-1 d-flex  justify-content: space-between">
                   <p className="desk-red">2 275 тг/кв.м</p>
                   < FaCartPlus className="icon-card"  />
                 </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{padding:25,marginLeft:25}}>
           <div className="user d-flex  justify-content: space-between">
             <Button  className="danger-card danger">-17%</Button>
             <FaHeartbeat  className="icon-card"  />
           </div>
              <Card.Img  className="fotow"  variant="top"  src={require('../Assets/img/img4.png')}  />
               <Card.Body>
                 <Card.Title>
                    <h5 className="card-big">TWU09ADL414 D плитка одлицовочная Adelia 249*500*8.5</h5>
                   </Card.Title>
                  <Card.Text>
                     <p className="desk-card">Коллекция Adelia</p>
                 </Card.Text>
                 <p className="desk1">2 650 тг/кв.м</p>
                 <div className="user-1 d-flex  justify-content: space-between">
                   <p className="desk-red">2 275 тг/кв.м</p>
                   < FaCartPlus className="icon-card"  />
                 </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Row>
    );
   }
}
 


