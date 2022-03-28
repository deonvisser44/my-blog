import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    databaseURL: 'https://my-blog-cfcc1.firebaseio.com',
    apiKey: "AIzaSyDeWXYwouKAlGfs2yG6UxTba5LUaIHJU3I",
    authDomain: "my-blog-cfcc1.firebaseapp.com",
    projectId: "my-blog-cfcc1",
    storageBucket: "my-blog-cfcc1.appspot.com",
    messagingSenderId: "1032674445265",
    appId: "1:1032674445265:web:61d417ccdafc80069202f0"
  };

// const firebaseConfig = {
//   databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_APP_ID}`
// };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app