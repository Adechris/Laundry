import React, {useState, useEffect} from 'react';
import {FaFacebook,
     FaTwitter,
      FaInstagram,
       FaGoogle, 
       FaLinkedin,
       FaPhoneAlt, 
       FaGem,
    FaArrowUp,
    FaAngleUp
    } from 'react-icons/fa';
import { ImLocation2} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';



const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    },[])

  return (
    <div>
 <footer style={{backgroundColor:'blue'}} className="text-center text-white text-lg-start mt-5">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 link-secondary">
    <FaFacebook/>
      </a>
      <a href="" className="me-4 link-secondary">
      <FaTwitter/>
      </a>
      <a href="" className="me-4 link-secondary">
      <FaGoogle/>
      </a>
      <a href="" className="me-4 link-secondary">
      <FaInstagram/>
      </a>
      <a href="" className="me-4 link-secondary">
       <FaLinkedin/>
      </a>
    
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          <FaGem/>Asmato Laundry Services
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p> <ImLocation2 /> New York, NY 10012, US</p>
          <p>
            <MdEmail/>
            info@example.com
          </p>
          <p><FaPhoneAlt/> + 01 234 567 88</p>
          <p><FaPhoneAlt/> + 01 234 567 89</p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <div className="top-to-btm">
            {showTopBtn && (
                <FaArrowUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                     title="Go Top"
                />
            )}
        </div>
        </div>
      </div>
    </div>


  
    
  </section>

  <div className="text-center p-4" style={{backgroundColor:'white', color:'black'}}>
    © 2023 Copyright:
      <a className="text-reset fw-bold" href="https://asmato@gmail.com/">asmato@gmail.com</a>
  </div>
  
</footer>
    </div>
  )
}

export default Footer
