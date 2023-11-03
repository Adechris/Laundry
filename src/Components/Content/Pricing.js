import React, {useState} from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import img6 from "../../Assets/pest-control.jpg";


const Pricing = () => {
    const [list, setList] = useState([
        {
        id:1,
        title:'Single Bedroom',
        subtitle:'Single Treatment',
        price:20000,
        contract:'Yearly Contract',
        yearly_price:70000
         },
       
        {
        id:2,
        title:'Two Bedrooms',
        subtitle:'Single Treatment',
        price:35000,
        contract:'Yearly Contract',
        yearly_price:85000
         },
       
        {
        id:3,
        title:'Three Bedrooms',
        subtitle:'Single Treatment',
        price:39000,
        contract:'Yearly Contract',
        yearly_price:100000
         },
        {id:4,
        title:'Four Bedrooms',
        subtitle:'Single Treatment',
        price:47000,
        contract:'Yearly Contract',
        yearly_price:125000
         },
       
        {id:5,
        title:'One Bedroom with compound',
        subtitle:'Single Treatment',
        price:40000,
        contract:'Yearly Contract',
        yearly_price:110000
         },
       
        {id:6,
        title:'Two Bedrooms with compound',
        subtitle:'Single Treatment',
        price:55000,
        contract:'Yearly Contract',
        yearly_price:150000
         },
       
        {id:7,
        title:'Three Bedrooms with compound',
        subtitle:'Single Treatment',
        price:69000,
        contract:'Yearly Contract',
        yearly_price:173000
         },
       
        {id:8,
        title:'Four Bedrooms with compound',
        subtitle:'Single Treatment',
        price:83500,
        contract:'Yearly Contract',
        yearly_price:195000
         },
       
        {id:9,
        title:'Five Bedrooms with compound',
        subtitle:'Single Treatment',
        price:93000,
        contract:'Yearly Contract',
        yearly_price:230000
         },
       
        {id:10,
        title:'Studio Apartment',
        subtitle:'Single Treatment',
        price:23000,
        contract:'Yearly Contract',
        yearly_price:75000
         },
       

])
    return <Container className='price'>
<div className='text-center text-white'>
       <h4>ASMATO FUMIGATION AND PEST CONTROL <span style={{fontFamily:'serif'}}>Services</span></h4>
      <p>...Keeping you safe and Healthy</p> 
    
       </div>
      {/* <img src={img6} className='img-container' width={1200} height={200} alt='cloth'/> */}
<h3 className='text-white text-center '>Price List</h3>
<Row>
    {list.map((item)=>{
        return <Col key ={item.id} className='m-2 mt-3'>
       <Card
       style={{width:'20rem'}}
    //    md={4}
    //    sm={4}
       >
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <hr/>
        <Card.Subtitle className="">{item.subtitle}</Card.Subtitle>
        <Card.Text>
         #{item.price}
        </Card.Text>
        <Card.Subtitle>
         {item.contract}
        </Card.Subtitle>
        <Card.Text>
         #{item.yearly_price}
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
    })}
</Row>
    </Container>
}
export default Pricing;