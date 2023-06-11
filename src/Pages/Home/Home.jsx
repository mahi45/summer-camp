import React from "react";
import Slider from "../../Components/Home/Slider";
import PopularClass from "../../Components/Home/PopularClass";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Instructors from "../../Components/Home/Instructors";
import About from "../../Components/Home/About";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <div className="py-6">
        <SectionTitle
          title="Popular Class"
          subtitle="Your most choiced class"
          center
        ></SectionTitle>
      </div>
      <PopularClass></PopularClass>
      <div className="py-6">
        <SectionTitle
          title="Instructors"
          subtitle="Your most loved instructors"
          center
        ></SectionTitle>
      </div>
      <Instructors></Instructors>
      <About></About>
    </>
  );
};
export default Home;
