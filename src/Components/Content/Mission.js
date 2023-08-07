import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
const Mission = () => {
    const details = [
        {id:1,title:'Our Mission',text:`To be the industry leader and laundry service provider of choice through our consistent pursuit of excellencein all that we do.  To Provide seamless and affordable dry cleaning and laundry services through innovations and sophisticated equipments.`},
        {id:2,title:`Our Vision`, text:`To provide best-in-class laundry room operations to our customers by delivering superior quality service. One stop laundry businesssolution- To be leading and established brand in the innovative laundry business in Africa.`},
        {id:1,title:'Our Core Values',text:'Our threefold value system of operation is centered on COMMITMENT, QUALITY and INTEGRITY. All services rendered in the organization is being developed around these three value scope of the brand.'}
    ]
  return (
    <div className='myBg3'  >
        <Container>
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
  )
}

export default Mission