import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  const schedule = () =>{
    navigate("/contact")
   
  }
  return (
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
            <h6 style={{ fontFamily:"", lineHeight:'40px' }}>
              We provide world-class fabric at competitive prices.</h6>
              <br />
        
              <h6>We offer special laundry services to maintain cleanliness and durability of the clothing.</h6>
                <br/>
                <h6> We provide pickup and delivery service at your home</h6>
       
             
           
      {/* <button id="btns" className="btn btn-primary" onClick={schedule}>Schedule Free Pick-up & Delivery</button> */}

          </div>
        </div>
      </Container>
      
    </section>
  );
};

export default About;
