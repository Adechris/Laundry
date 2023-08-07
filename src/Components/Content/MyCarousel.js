import React from 'react'
import {Carousel, Container} from 'react-bootstrap';
import img1 from "../../Assets/Dry-Cleaning.png";
import img2 from "../../Assets/Drycleaning-1.png";
import img3 from "../../Assets/Bulkwash.png";
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';



const MyCarousel = () => {
    const datas = [
        {
            id:1,
            image:img1,
            title:'Responsive Design',
            subtitle:`Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`
        },
        {
            id:2,
            image:img2,
             title:'Creative Design',
            subtitle:`Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`
        },
        {
            id:3,
            image:img3,
            title:'SEO Optimized',
            subtitle:`Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.`
        },

    ]
  return (
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
       <Link style={{textDecoration:'none'}} to='/services'>
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
  )
}

export default MyCarousel