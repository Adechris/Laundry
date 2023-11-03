import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import MyNav from './Components/Header/MyNav';
import HomePage from './Components/Content/HomePage';
import MyCarousel from './Components/Content/MyCarousel';
import About from './Components/Content/About';
import Contact from './Components/Content/Contact';
import Services from './Components/Content/Services';
import ErrorPage from './Components/Content/ErrorPage';
import Blog from './Components/Content/Blog';
import Testimonial from './Components/Content/Testimonial';
import Pricing from './Components/Content/Pricing';
import Footer from './Components/Content/Footer';
import Register from './Components/Content/Register';
import Login from './Components/Content/Login';

function App() {
  return (
    <section>
      <BrowserRouter>
          <MyNav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/carousel' element={<MyCarousel/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/price' element={<Pricing/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </section>
  );
}

export default App;
