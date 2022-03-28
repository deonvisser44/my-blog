import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from './pages/Home';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [showToast, setShowToast] = useState(false);

  const copyMail = () => {
    setShowToast(true)
  
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000)
    return () => clearTimeout(timer);
  }
  return (
    <>
      <Layout copyMail={copyMail}>
      <Routes>
              <Route path="/" exact element={<Home showToast={showToast} />} />
            </Routes>
      </Layout>
    </>
  );
}

export default App;
