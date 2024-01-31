import React from "react";
import Image from "../images/gallery/gallery5.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";


const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values" />
          </div>
          
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values"></SectionHead>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            repudiandae aliquid assumenda quam reprehenderit nihil! Perspiciatis
            explicabo corrupti fuga obcaecati ipsum unde impedit, minima
            blanditiis nisi sed vero eius harum.
          </p>
          <div className="values__wrapper">
            {
                values.map(({id, icon, title, desc}) => {
                    return (
                        <Card className="values_value" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        
                        </Card>
                    )
                } )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
