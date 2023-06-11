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
        <div className="grid md:grid-cols-1 gap-3">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>

          {user.map((user, index) => (
            <AllUserTable key={index} user={user} />
          ))}
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
