import "./contact.css";
import HeaderImage from "../../images/gallery/gallery7.jpg";
import Header from "../../components/Header";
import { SiGmail } from "react-icons/si";
// import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <Header title="Conatct" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        quas.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:duwadiksh15@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              alt="mail "
            >
              <SiGmail />
            </a>

            <a
              href="http://m.me/kshitiz_duwadi"
              target="_blank"
              rel="noreferrer noopener"
              alt="mail "
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer noopener"
              alt="mail "
            >
              <RiWhatsappFill />
            </a>
          </div>
         
        </div> 
      </section>
    </>
  );
};
// 3:38:54
export default Contact;
