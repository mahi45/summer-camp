import React, { useEffect, useState } from "react";
import { getAllUser } from "../../api/auth";
import AllUserTable from "./AllUserTable";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllUser = () => {
  const [user, setAllUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllUser()
      .then((data) => {
        setAllUser(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All User</h2>
      {user && user.length > 0 ? (
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <AllUserTable key={index} index={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="pt-12">
          <SectionTitle
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default AllUser;
