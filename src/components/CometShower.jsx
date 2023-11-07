import { useEffect } from "react";
import "../styles/components/CometShower.scss";
import useScrollStore from "../zustand/useScrollStore";
const CometShower = () => {
  const { scrollY, setScrollY } = useScrollStore();
  /**
   *
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      className="meteor-shower-container"
      style={{
        transform: `translate3d(0px, ${-scrollY / 3}px, 0px)`,
        height: `${document.body.scrollHeight + 500}px`,
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
  );
};

export default CometShower;
