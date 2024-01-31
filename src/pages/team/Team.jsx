import React from 'react';
import HeadImg from '../../images/gallery/gallery5.jpg';
import './team.css';
import Header from '../../components/Header';
import { team } from '../../data';
import Teammember from './../../components/Teammember';

const Team = () => {
  return (
    <>
      <Header title="Our Teams" image={HeadImg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        voluptas consequatur, sapiente aperiam laborum at neque magnam nisi
        atque repellendus!{" "}
      </Header>
      <section className="team">
        <div className="container team__container">
          {team.map(({ id, image, name, designation, socials }) => (
            <Teammember
              key={id}
              image={image}
              name={name}
              designation={designation}
              socials={socials}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
