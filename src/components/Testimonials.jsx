import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import SectionHead from './SectionHead';
import { SiVitest } from 'react-icons/si';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { testimonials } from '../data';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      NextTestimonialHandler();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const prevTestimonialHandler = () => {
    setIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  const NextTestimonialHandler = () => {
    setIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  // Check if testimonials array is empty
  if (testimonials.length === 0) {
    return null; // or return a message indicating no testimonials available
  }

  // Destructure properties from testimonials[index]
  const { name, quote, job, avatar } = testimonials[index];

  return (
    <section className="testimonials">
      <div className="container testimonials__conatiner">
        <SectionHead icon={<SiVitest />} title="Testimonials" className="testimonials__head" />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonails__btn-container">
          <button className="testimonials__btn" onClick={prevTestimonialHandler}>
            <FaArrowCircleLeft />
          </button>
          <button className="testimonials__btn" onClick={NextTestimonialHandler}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
