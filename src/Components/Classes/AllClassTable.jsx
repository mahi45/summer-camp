import React from "react";

const AllClassTable = ({ myclass, index }) => {
  console.log(index);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={myclass.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{myclass.className}</td>
      <td>{myclass.status}</td>
      <td>50</td>
      <td>Feedback Text</td>
      <td>
        <button className="btn btn-accent">Update</button>
      </td>
    </tr>
  );
};

export default AllClassTable;
