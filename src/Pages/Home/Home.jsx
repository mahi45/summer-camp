import React from "react";
import Slider from "../../Components/Home/Slider";
import PopularClass from "../../Components/Home/PopularClass";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import About from "../../Components/Home/About";
import Instructors from "../../Pages/Instructors/Instructors";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <div className="py-6 bg-emerald-50">
        <SectionTitle
          title="Popular Class"
          subtitle="Your most choiced class"
          center
        ></SectionTitle>
      </div>
      <PopularClass></PopularClass>
      <div className="py-6 bg-emerald-50">
        <SectionTitle
          title="Popular Instructors"
          subtitle="Your most loved instructors"
          center
        ></SectionTitle>
      </div>
      <Instructors></Instructors>
      <div className="py-6 bg-emerald-50">
        <SectionTitle
          title="About"
          subtitle="Your summercamp activities"
          center
        ></SectionTitle>
      </div>
      <About></About>
    </>
  );
};
export default Home;
