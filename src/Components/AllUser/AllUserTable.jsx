import React, { useContext, useState } from "react";
import AdminModal from "../Modal/AdminModal";
import { becomeAdmin } from "../../api/auth";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

const AllUserTable = ({ user }) => {
  const { role, setRole } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const modalHandler = (email) => {
    becomeAdmin(email).then((data) => {
      console.log(data);
      toast.success("You are now admin!");
      setRole("admin");
      closeModal();
    });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  {/* <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div> */}
                  <div>
                    <div className="font-bold">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="">
                <button className="btn btn-outline btn-secondary mr-3">
                  Make Instructor
                </button>
                {role && role == "admin" && (
                  <button
                    onClick={() => setModal(true)}
                    className="btn btn-outline btn-accent"
                    disabled
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
      <AdminModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></AdminModal>
    </div>
  );
};

export default AllUserTable;
