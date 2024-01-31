import Header from "../../components/Header";
import "./about.css";
import VisionImage from "../../images/gallery/gallery8.jpg";
import StoryImage from "../../images/gallery/gallery3.jpg";
import MissionImage from "../../images/gallery/gallery9.jpg";
import HeaderImage from "../../images/gallery/gallery7.jpg";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim
        eius exercitationem consectetur cum omnis iusto at magnam facilis
        officia.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story_image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, voluptate. Recusandae cum provident quisquam, esse
              vel, eaque ut eius, saepe voluptates qui expedita voluptatibus!
              Consequatur possimus officia asperiores minus iste!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              est soluta aperiam repudiandae quidem debitis harum consectetur
              ratione perferendis maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              quam!
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, voluptate. Recusandae cum provident quisquam, esse
              vel, eaque ut eius, saepe voluptates qui expedita voluptatibus!
              Consequatur possimus officia asperiores minus iste!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              est soluta aperiam repudiandae quidem debitis harum consectetur
              ratione perferendis maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              quam!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision_image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission_image" />
          </div>
          <div className="about__section-content">
            <h1>Our MIssion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, voluptate. Recusandae cum provident quisquam, esse
              vel, eaque ut eius, saepe voluptates qui expedita voluptatibus!
              Consequatur possimus officia asperiores minus iste!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              est soluta aperiam repudiandae quidem debitis harum consectetur
              ratione perferendis maiores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              quam!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
// 3:27:10
export default About;
