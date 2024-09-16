import {  Route,Routes } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import {  useEffect } from 'react'
import Header from "./Components/Layout/header";
import Intro from "./Components/Pages/Home/Short Intro/short_intro";
import ShortMenu from "./Components/Pages/Home/Short Menu/short_menu";
import Testimonial from "./Components/Pages/Home/Testimonial/testimonial";
import AboutUs from "./Components/Pages/Home/About/aboutus";
import Footer from "./Components/Pages/Home/Footer/footer";

function App() {
  useEffect(()=>{
    document.title='Little Lemon'
  })
  return (
    <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
      <meta name="og:title" content="Litle Lemon Restaurant"/>
      <meta name="og:description" content="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
      <meta name="og:image" content="https://cdn.dribbble.com/userupload/4149863/file/original-b59dcb3c6b4dcb6f87e9dc0b9a0e5a23.png"/>
    </Helmet>
    <Header />
      <Routes>
            <Route path="/" element={<><Intro /> <ShortMenu /> <Testimonial /><AboutUs /><Footer /></>} />
            <Route path="/menu" element={<h1></h1>} />
            <Route path="/reservations" element={<h1></h1>} />
            <Route path="/order_delivery" element={<h1></h1>} />
      </Routes>
    </>
  );
}

export default App;
