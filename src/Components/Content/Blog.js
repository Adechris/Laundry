import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Blog = () => {
  return (
    <section style={{marginTop:"90px"}}>
        <Container>
            <div className="text-center">
                <p style={{color:'blue'}}>Our Blog</p>
                <div >
                <h1 style={{textTransform:'uppercase', fontWeight:'bolder', color:'darkblue'}}> News And Articles</h1>
                </div>
                <div>
                    <p>No News Found</p>
                </div>

            </div>
        </Container>
    </section>
  )
}

export default Blog