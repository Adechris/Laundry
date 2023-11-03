import React, { useEffect, useState } from "react";
import { Container, Form, Card, Row, Col } from "react-bootstrap";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pic, setPic] = useState("");
  const [myDate, setMyDate] = useState("");
  const [myTime, setMyTime] = useState("");

    const cansave = Boolean(firstName)
     && Boolean(lastName)
      && Boolean(phone) 
      && Boolean(address)
       && Boolean(myDate)
       && Boolean(myTime);

       const handleSubmit = (e) =>{
        e.preventDefault();
       
       }


  return (
    <section>
      <Form className="mt-5 " onSubmit={handleSubmit}>
        <Card className="py-4" >
          <Card.Title>
            <h2 className="text-center"
              style={{
                  color: "darkblue",
                  fontWeight: "bold",
                }}
                >
              Schedule Quick Pick-Up
            </h2>
          </Card.Title>
          <Container>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                className="shadow-none" 
                type="text"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                />
            
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                 className="shadow-none"
                  type="text"
                  value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                  />
            
            <div className="mt-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              className="shadow-none"
               type="tel" 
               value={phone}
                onChange={(e)=>setPhone(e.target.value)}
               />
            </div>
            <div className="mt-2">
              <Form.Label>Pick-up Address</Form.Label>
              <Form.Control 
              className="shadow-none"
               type="text" 
               value={address}
                onChange={(e)=>setAddress(e.target.value)}
               />
            </div>
         
            <div className="mt-2">
              <Form.Label>Pick-up Date</Form.Label>
              <Form.Control
               className="shadow-none"
                type="date" 
                value={myDate}
                onChange={(e)=>setMyDate(e.target.value)}
                />
            </div>
            <div className="mt-2">
              <Form.Label>Pick-up Time</Form.Label>
              <Form.Control
               className="shadow-none"
                type="time" 
                value={myTime}
                onChange={(e)=>setMyTime(e.target.value)}
                />
            </div>
            <button 
            disabled={!cansave}
            type='submit'
             className="btn btn-primary mt-4">
                SEND
            </button>
          </Container>
        </Card>
      </Form>
    </section>
  );
};

export default Signup;
