import React from "react";

const AllClass = ({ allClass }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={allClass.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{allClass.className}</h2>
        <p>Instructor: {allClass.instructorName}</p>
        <p>Seats: {allClass.seats}</p>
        <p>Price: {allClass.price}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
