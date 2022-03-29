import React from "react";
import image from "../assets/finalcapture.png";
import classes from "./PersonalCard.module.css";

function PersonalCard() {
  return (
    <div className={classes.container}>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={image} alt="self portrait" />
      </div>
      <p className={classes.body}>
        Hi! I'm Deon Visser, web developer and CS student. I built this blog along with a CMS to post and manage its
        content. I will be using it to post about my learning progress as a web
        developer. Thanks for stopping by.
      </p>
    </div>
  );
}

export default PersonalCard;
