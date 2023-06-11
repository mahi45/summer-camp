import React, { useContext, useState } from "react";
import InstructorModal from "../Modal/InstructorModal";
import { becomeAdmin, becomeInstructor } from "../../api/auth";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import AdminModal from "../Modal/AdminModal";

const AllUserTable = ({ user }) => {
  const { role, setRole } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const modalHandler = (email) => {
    becomeInstructor(email).then((data) => {
      console.log(data);
      toast.success("You are now instructor!");
      setRole("instructor");
      closeModal();
    });
  };
  const adminModalHandler = (email) => {
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
      <tr>
        <td>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </td>
        <td>{user.email}</td>
        <td className="">
          <button
            onClick={() => setModal(true)}
            className="btn btn-outline btn-secondary mr-3"
            disabled={role == "instructor"}
          >
            Make Instructor
          </button>
          <button
            onClick={() => setModal(true)}
            className="btn btn-outline btn-accent"
          >
            Make Admin
          </button>
        </td>
      </tr>
      <InstructorModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></InstructorModal>
      <AdminModal
        email={user?.email}
        adminModalHandler={adminModalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></AdminModal>
    </div>
  );
};

export default AllUserTable;
