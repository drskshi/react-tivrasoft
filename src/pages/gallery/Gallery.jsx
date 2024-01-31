import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/gallery/gallery9.jpg";
import Header from "./../../components/Header";

const Gallery = () => {
  const gallerylLength = 10;
  const images =[]
  for (let i=1; i<= gallerylLength; i++){
    images.push(require(`../../images/gallery/gallery${i}.jpg`))
  }
 

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        voluptas consequatur, sapiente aperiam laborum at neque magnam nisi
        atque repellendus!{" "}
      </Header>
      <section className="gallery">
        <div className="container gallery__container ">
          {
            images.map((images,index) =>{
              return <article key={index}>
                <img src={images} alt={`gallery_image ${index + 1}`}  />
              </article>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;
