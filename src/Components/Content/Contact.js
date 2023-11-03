import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../../Assets/Drycleaning-1.png";
import Mission from "./Mission";
import Signup from "./Signup";
const Contact = () => {
    const details = [
        {id:1,title:'Our Vision',text:'As we are not working without a big goal ahead, we look forward to becoming a renowned dry cleaning services brand in Africa, an household name for every working class family in Africa.'},
        {id:1,title:'Our Mission',text:'With the huge goal that is set to be achieved, we want to use our dedication and a notable record of integrity to make our dry cleaning brand standout amongst other highly competitive organization.'},
        {id:1,title:'Our Core Values',text:'Our threefold value system of operation is centered on COMMITMENT, QUALITY and INTEGRITY. All services rendered in the organization is being developed around these three value scope of the brand.'}
    ]
  return (
    <section  className=" py-5 mt-3">
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
    
  );
};

export default Contact;
