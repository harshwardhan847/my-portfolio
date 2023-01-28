import React from "react";
import "./style.scss";
import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { BsAwardFill, BsHandThumbsUp} from "react-icons/bs";
const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
            
            <span className="icon">
              <img src={hand} alt="" />
            </span>
            <span className="text">, I Am</span>
          </span>
            <span className="big-text">Harsh Wardhan</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus
            numquam aliquam placeat laborum quos ipsa sapiente totam quaerat
            quae nostrum omnis officiis, sed libero{" "}
          </p>
          <CallToAction text="Get Started" />
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
          <div className="highlights horizontal">
            <div className="icon">
                <BsAwardFill/>
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
                <BsHandThumbsUp/>
            </div>
            <div className="text">
                <span>4k+</span>
                Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
