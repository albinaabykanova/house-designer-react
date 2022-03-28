import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";
import '../Assets/css/Utilities.css';
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from 'react-icons/fa';


export default class Utilities extends Component {
   render () {
    return (
      <Row className="util-body">
        <Col md={4} className="selectors">
          <Row className="utilities">
              <div className="title-util" >
                  <h3>У нас вы найдете плитку <br/> для любого решения</h3>
              </div> 
                    <p className="lolo1">Экслюзивные коллекции плитки для дома и коммерческих <br/> помещений на любой вкус</p>
                    <p className="lolo">ВЫБЕРИТЕ ТИП ПЛИТКИ</p> 
                <div className="desk-util">
                    <p>Плитка для ванной</p>
                    <p>Плитка для кухни</p>
                    <p className="desk-1">Плитка для стен</p>
                    <p>Плитка для пола</p>
                    <p>Мозаика</p>
                    <p>Плитка для ванной</p>
                </div>
            </Row>
        </Col>
    
       <Col md={8}>
            <Image src={require('../Assets/img/row3.png')} className="uti-foto" />
            <Image src={require('../Assets/img/row2.png')} className="uti1-foto" />
       </Col>
       <div className="colored-1">
             Все типы плитки <FaArrowRight />
        </div>
     </Row>
  
    
    );
   }
}
 


