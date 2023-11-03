import React from 'react';
import {Carousel, Container, Card, Row, Col} from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaLinkedin} from 'react-icons/fa';
import img1 from "../../Assets/Dry-Cleaning.png";
import img2 from "../../Assets/Drycleaning-1.png";
import img3 from "../../Assets/Bulkwash.png";
import img4 from "../../Assets/cleaning.jpeg";
import img5 from "../../Assets/fumigation.jpg";
import img6 from "../../Assets/pest-control.jpg";
import Image from 'react-bootstrap/Image'
import img from "../../Assets/Drycleaning-1.png";
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';

const HomePage = () => {
  const datas = [
    {
        id:1,
        image:img1,
        title:'Residential & Commercial Cleaning Services',
        subtitle:`Quality, affordable and professional cleaning services. That's what we offer to satisfy your needs.`
    },
    {
        id:2,
        image:img2,
        title:'Residential & Commercial Cleaning Services',
        subtitle:`Quality, affordable and professional cleaning services. That's what we offer to satisfy your needs.`
    },
    {
        id:3,
        image:img3,
        title:'Residential & Commercial Cleaning Services',
        subtitle:`Quality, affordable and professional cleaning services. That's what we offer to satisfy your needs.`
    },
   

];


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
<section>

<Container fluid >
<Carousel className='carousel'>
    {datas.map((data)=>{
      return <Carousel.Item key={data.id}>
        <Image
         src={data.image} 
        //  height={150}
         className='carousel-img'
         />
     <Carousel.Caption>
       <h3>{data.title}</h3>
       <p>{data.subtitle}</p>
       <Link style={{textDecoration:'none'}} to='/price'>
        <button className='btn btn-primary'>Get A Free Estimate</button>
        </Link>
        <Link style={{textDecoration:'none'}} to='/services'>
        <button className='btn btn-primary m-2'>Our Services</button>
        </Link>
       
     </Carousel.Caption>
   
   </Carousel.Item>
    })}
  </Carousel>
   </Container>

   {/* About */}
   <section
    className="myBg "
    >
      <Container >
        <div style={{ color: "white" }}>
          <div style={{marginTop:'40px', position:'absolute'}}>
            <p className="mt-5">WELCOME TO </p>
            <br />
            <span style={{ fontSize: "60px", fontWeight: "bold" }}>
              Asmato 
            </span>
            <br />
            <span style={{ fontSize: "60px", fontWeight: "bold" }}>
              Laundry
            </span>
            <br/>
            <span style={{ fontSize: "60px", fontWeight: "bold" }}>
              And
            </span>
            <br/> 
            <span style={{ fontSize: "60px", fontWeight: "bold" }}>
            Cleaning Services
            </span>
            <br />
            <div style={{ fontFamily:"cursive", lineHeight:'18px' }}>
            <div >
              We provide world-class fabric at competitive prices.</div>
              <br />
              <div>We offer special laundry services to maintain cleanliness and durability of the clothing.</div>
                <br/>
                <div> We provide pickup and delivery service at your home</div>
                </div>
          </div>
        </div>
      </Container>
    </section>

{/* services */}
<section className='services mt-5'>
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
        {/* <div className='myBg3'  > */}
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

 

    {/* </div> */}
      </Container>
     
    </section>

{/* contact */}
<section  className="py-5">
      <Container>
       
          <Image className="contact-img"
          src={img}
          />
          <div className="mt-5">
            <h2 style={{color:'darkblue'}}>We give our customers superior, quality, exceptional value and unmatched reliability.</h2>
            <p className='text-white'>ASMATO LAUNDRY is a cloth care organization that delivers high-classed dry cleaning services
                 at much subsidized rates to her customers. We are moved by the desire
                  to make cloth maintenance services affordable and accessible 
                  to all office workers who hardly find the time to sit through to carry out their
                   own laundry and dry cleaning activities.</p>
          </div>
          <Signup/>
      </Container>
    </section>

{/* Testimonial */}

<section className='mt-2'>
        <Container>
          <div className='text-center text-white'>
      <p>Testimonial</p>
          </div>
          <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <Card >
        <Image
         src=''
          height={200}
          alt='name'
          />
        <Card.Body>
          <Card.Text >
          Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
          <Card.Text>
            Mrs Adetunmibi
          </Card.Text>
        </Card.Body>
      </Card>
          
        </div>

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <Card >
        <Image
         src=''
          height={200}
          alt='name'
          />
        <Card.Body>
          <Card.Text >
          Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
          <Card.Text>
            Mrs Adetunmibi
          </Card.Text>
        </Card.Body>
      </Card>
        </div>

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <Card >
        <Image
         src=''
          height={200}
          alt='name'
          />
        <Card.Body>
          <Card.Text >
          Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
          <Card.Text>
            Mrs Adetunmibi
          </Card.Text>
        </Card.Body>
      </Card>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <Card >
        <Image
         src=''
          height={200}
          alt='name'
          />
        <Card.Body>
          <Card.Text >
          Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
          <Card.Text>
            Mrs Adetunmibi
          </Card.Text>
        </Card.Body>
      </Card>
          
        </div>
      </div>
    </div>
  </section>
        </Container>

    </section>














 
</section>  )
}

export default HomePage