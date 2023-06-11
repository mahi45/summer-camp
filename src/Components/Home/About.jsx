import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 py-6">
      <div className="space-y-2 items-center order-2 md:order-1 p-6 md:p-6">
        <p>LEARN MORE</p>
        <h1 className="text-5xl">ABOUT CLUB</h1>
        <h3 className="text-3xl">
          The Club provides children the opportunity to learn and develop tennis
          skills.
        </h3>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="btn btn-success">Our Classes</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
      <div className="order-1">
        <img
          className="sm:w-full md:w-full"
          src="https://i.ibb.co/Bg15tRw/Banner2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
