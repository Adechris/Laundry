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
  );
};

export default About;
