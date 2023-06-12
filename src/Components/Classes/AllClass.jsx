import React, { useEffect, useState } from "react";
import { getAllClass } from "../../api/class";
import AllClassTable from "./AllClassTable";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllClass = () => {
  const [myclass, setMyAllClass] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllClass()
      .then((data) => {
        setMyAllClass(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All User</h2>
      {myclass && myclass.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myclass.map((myclass, index) => (
                <AllClassTable key={index} index={index} myclass={myclass} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="pt-12">
          <SectionTitle
            title="No class available"
            subtitle="Please create class"
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default AllClass;
