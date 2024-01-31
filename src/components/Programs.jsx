import React from "react";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import { Link } from "react-router-dom";
import { IoArrowRedoSharp } from "react-icons/io5";
import { GiLaurelCrown } from "react-icons/gi";
import Card from "../UI/Card";

export const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        {/* <div className="programs__head">
                <span>{<GiLaurelCrown />}</span>
                <h2>Programs</h2>
            </div> */}
        <SectionHead
          icon={<GiLaurelCrown style={{ width: "3rem" }} />}
          title="Programs"
        />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <IoArrowRedoSharp />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
