import React from "react";

const AllInstructor = ({ allInstructor }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={allInstructor.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{allInstructor.className}</h2>
        <p>Instructor: {allInstructor.instructorName}</p>
        <p>Seats: {allInstructor.seats}</p>
        <p>Price: {allInstructor.price}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default AllInstructor;
