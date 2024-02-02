import { useEffect, useState } from "react";
import "../styles/components/CometShower.scss";
import useScrollStore from "../zustand/useScrollStore";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import useHideCometShower from "../zustand/useHideCometShower";

const CometShower = () => {
  const { scrollY, setScrollY } = useScrollStore();
  const { hideCometShower, setHideCometShower } = useHideCometShower();
  const [limitHeight, setLimitHeight] = useState(false);
  const [currPage, setCurrPage] = useState(null);
  const { pathname } = useLocation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  let rafId;

  const requestRef = () => {
    rafId = requestAnimationFrame(() => {
      handleScroll();
      requestRef();
    });
  };

  useEffect(() => {
    requestRef();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setLimitHeight(pathname === "/");
    setCurrPage(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <>
      {!hideCometShower && (
        <div
          className="meteor-shower-container"
          style={{
            willChange: "transform",
            transform: `translate3d(0px, ${-scrollY / 3}px, 0px)`,
            height: `${
              limitHeight ? "100%" : `${document.body.scrollHeight + 500}px`
            }`,
          }}
        >
          <div className="star"></div>
          <div className="meteor-1"></div>
          <div className="meteor-2"></div>
          <div className="meteor-3"></div>
          <div className="meteor-4"></div>
          <div className="meteor-5"></div>
          <div className="meteor-6"></div>
          <div className="meteor-7"></div>
          <div className="meteor-8"></div>
          <div className="meteor-9"></div>
          <div className="meteor-10"></div>
          <div className="meteor-11"></div>
          <div className="meteor-12"></div>
          <div className="meteor-13"></div>
          <div className="meteor-14"></div>
          <div className="meteor-15"></div>
        </div>
      )}
    </>
  );
};

export default CometShower;
