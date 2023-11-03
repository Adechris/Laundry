import React from "react";
import { Card, Col, Image, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import img1 from "../../Assets/Bulkwash.png";
import img2 from "../../Assets/Dry-Cleaning.png";
import img3 from "../../Assets/Drycleaning-1.png";
import img4 from "../../Assets/cleaning.jpeg";
import img5 from "../../Assets/fumigation.jpg";
import img6 from "../../Assets/pest-control.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const clothDetails = [
    {
      id: 1,
      img: img3,
      text: "Premium Dry Cleaning",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 2,
      img: img1,
      text: "Bulk Wash",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 3,
      img: img2,
      text: "Laundry Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 4,
      img: img4,
      text: "Cleaning Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 5,
      img: img5,
      text: "Fumigation Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 6,
      img: img6,
      text: "Pest Control",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
  ];
  const details = [
    {id:1,title:'Our Mission',text:`To be the industry leader and laundry service provider of choice through our consistent pursuit of excellencein all that we do.  To Provide seamless and affordable dry cleaning and laundry services through innovations and sophisticated equipments.`},
    {id:2,title:`Our Vision`, text:`To provide best-in-class laundry room operations to our customers by delivering superior quality service. One stop laundry businesssolution- To be leading and established brand in the innovative laundry business in Africa.`},
    {id:1,title:'Our Core Values',text:'Our threefold value system of operation is centered on COMMITMENT, QUALITY and INTEGRITY. All services rendered in the organization is being developed around these three value scope of the brand.'}
];
  
  
  return (
    <section className='mt-4'>
      <Container>
        <div className="text-center">
          <h5 style={{ color: "blue", textTransform: "uppercase" }}>
            Our Services
          </h5>
          <h1
            style={{ color: "darkblue", fontSize: "50px", fontWeight: "bold" }}
          >
            What we do
          </h1>
        </div>
       
        <Row >
          {clothDetails.map((cloth) => {
            const { id, img, text, text2 } = cloth;
            return (
             <Col key={id} className='m-2 '>
        <Card >
        <Image
         src={img}
          height={200}
          md={3}
          sm={3}
          />
        <Card.Body>
          <Card.Text >{text}</Card.Text>
          <Card.Text>
           <Link style={{textDecoration:'none'}} to='/contact'>{text2}</Link> 
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
            );
          })}
        </Row>

        <div className='myBg3'  >
        <Container fluid>
        <Row id='mission'>
            {details.map((detail)=>{
                const {id, title, text} = detail;
                return <Col sm={4} md={4} style={{marginTop:'50px'}} >
                <h5 style={{color:'darkblue', fontWeight:'bolder'}}>{title}</h5>
                <div className="mt-3">
                <p>{text}</p>
                </div>
                </Col>
            })}
        </Row>
        
        </Container>

 

    </div>
      </Container>
    </section>
  );
};
export default Services;
