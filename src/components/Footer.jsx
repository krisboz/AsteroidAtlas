import "../styles/components/Footer.scss";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <p>Made By Kristijan Bozinovic</p>
        <div className="links-container">
          <a href="https://github.com/krisboz/asteroid-atlas" target="_blank">
            {" "}
            <FaGithub />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
