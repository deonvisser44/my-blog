import React, { useState } from "react";
import classes from "./BlogCard.module.css";


function BlogCard(props) {
  const [postIsOpen, setPostIsOpen] = useState(false);

  const handleView = () => {
    setPostIsOpen((prevState) => {
      return (prevState = !prevState);
    });
  };
  return (
    <>
      <div className={classes.blogCard} id={props.id}>
        <div className={classes.head}>
          <p className={classes.title}> {props.title}</p>
        </div>

        <p className={classes.date}>{props.date}</p>
        <img src={props.image} alt="image" />
        {!postIsOpen ? (
          <p className={classes.viewHandler} onClick={handleView}>
            Show More
          </p>
        ) : (
          <p className={classes.viewHandler} onClick={handleView}>
            Show Less
          </p>
        )}
        {postIsOpen && <p className={classes.article} dangerouslySetInnerHTML={{__html: props.post}}/>}
      </div>
    </>
  );
}

export default BlogCard;