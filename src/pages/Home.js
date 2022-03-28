import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import BlogCard from "../components/BlogCard";
import PersonalCard from "../components/PersonalCard";
import Toast from "../components/Toast";
import { db } from "../firebase";
import {
  query,
  orderBy,
  collection,
  onSnapshot,
} from "firebase/firestore";


function Home(props) {
  
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const unsub = onSnapshot(q, (querySnapshot) => {
    let postsArray = [];
    querySnapshot.forEach((doc) => {
      postsArray.push({ ...doc.data(), id: doc.id });
    });
    setPosts(postsArray);
  });
  return () => unsub();
}, []);



  return (
    <div className={classes.home}>
      <PersonalCard />
      <ul className={classes.list}>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            post={post.post}
            date={post.date}
          />
        ))}
      </ul>
       {props.showToast && <Toast/>}
    </div>
  );
}

export default Home;