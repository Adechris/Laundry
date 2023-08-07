import React from 'react';
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleError = () =>{
        navigate(-1)
    }
  return (
    <section style={{marginTop:"120px"}}>
    <div className='text-center '>
        <h2 style={{color:'darkblue'}}>Sorry, this page is not available</h2>
        <Button className="mt-5" onClick={handleError}>GO BACK</Button>
    </div>
    </section>
  )
}

export default ErrorPage