import React from "react";
import { Card, Col, Image, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import img1 from "../../Assets/Bulkwash.png";
import img2 from "../../Assets/Dry-Cleaning.png";
import img3 from "../../Assets/Drycleaning-1.png";
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
      img: img3,
      text: "Cleaning Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 5,
      img: img1,
      text: "Fumigation Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
    {
      id: 5,
      img: img1,
      text: "Fumigation Services",
      text2:'schedule Pick-up',
      links:'/cloth'
    },
  ];
  const works = [
    {id:1, link1:'Premium Dry Cleaning', link2:'get in touch', img:img2},
    {id:2, link1:'Bulk Wash', link2:'get in touch', img:img1},
    {id:3, link1:'Laundry Services', link2:'get in touch', img:img3},
    {id:4, link1:'Cleaning Services', link2:'get in touch', img:img2},
    {id:5, link1:'Fumigation Services', link2:'get in touch', img:img1}

  ];
  const details = [
             {id:1,title:'Our Mission',text:`To be the industry leader and laundry service provider of choice through our consistent pursuit of excellencein all that we do. To Provide seamless and affordable dry cleaning and laundry services through innovations and sophisticated equipments.`},
            {id:2,title:`Our Vision`, text:`To provide best-in-class laundry room operations to our customers by delivering superior quality service. One stop laundry business solution- To be leading and established brand in the innovative laundry business in Africa.`},
        {id:3,title:'Our Core Values',text:'Our threefold value system of operation is centered on COMMITMENT, QUALITY and INTEGRITY. All services rendered in the organization is being developed around these three value scope of the brand.'}

       ]
  
  return (
    <section className='services'>
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
             <Col key={id} className='m-3 '>
        <Card >
        <Image
         src={img}
          height={200}
          md={4}
          sm={4}
          />
        <Card.Body>
          <Card.Title >{text}</Card.Title>
          <Card.Text>
           <Link style={{textDecoration:'none'}} to='/contact'>{text2}</Link> 
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
    
            );
          })}
        </Row>
      </Container>
    
    </section>
  );
};
export default Services;
