import React from "react";
import { MainHeader } from "../../components/MainHeader";
import "./home.css";
import { Programs } from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";




const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
     
    </>
  );
};

export default Home;
