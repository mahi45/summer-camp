import React from "react";

const AllInstructor = ({ allInstructor }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={allInstructor.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{allInstructor.email}</h2>
      </div>
    </div>
  );
};

export default AllInstructor;
