import { useState, useLayoutEffect } from "react";
import "../styles/components/Footer.scss";
import { FaGithub } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [totalHeight, setTotalHeight] = useState(null);

  const { pathname } = useLocation();

  //Effect for measuring the total height of the page
  //Adds a little delay to account for rendering of everything
  //Neccessary because of the comet shower background

  useLayoutEffect(() => {
    const delay = 500; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      // Get the total height of the document
      const totalHVal = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      setTotalHeight(totalHVal);

      console.log("Total Height:", totalHVal);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
  return (
    <>
      {totalHeight && pathname !== "/" && (
        <footer>
          <p>Made By Kristijan Bozinovic</p>
          <div className="links-container">
            <a href="https://github.com/krisboz/asteroid-atlas" target="_blank">
              {" "}
              <FaGithub />
            </a>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
