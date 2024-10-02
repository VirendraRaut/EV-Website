import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";

const Hero = ({
  heroData,
  setPlayStatus,
  heroCount,
  setHeroCount,
  PlayStatus,
}) => {
  return (
  <div className="hero">
    <div className="hero-text">
      <p>{heroData.text1}</p>
      <p>{heroData.text2}</p>
    </div>
    <div className="hero-explore">
      <p>Explore the features</p>
      <img src={arrow_btn} alt="" />
    </div>
  </div>
);
};

export default Hero;
