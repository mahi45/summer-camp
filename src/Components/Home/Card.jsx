import React from "react";

const Card = ({ myClass }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4">
      <figure>
        <img src={myClass.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{myClass.className}</h2>
        <p>{myClass.instructorName}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
