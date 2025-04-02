import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Program" />
        <Programs />
        <About setShowVideo={setShowVideo} />
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="What Student Says" subTitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in Touch" subTitle="Contact Us" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo} />
    </>
  );
};

export default App;
