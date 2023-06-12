import React, { useContext, useState } from "react";
import InstructorModal from "../Modal/InstructorModal";
import { becomeAdmin, becomeInstructor } from "../../api/auth";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import AdminModal from "../Modal/AdminModal";

const AllUserTable = ({ user, index }) => {
  const { role, setRole } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);

  const instructorModalHandler = (email) => {
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
      adminCloseModal();
    });
  };

  const closeModal = () => {
    setModal(false);
  };
  const adminCloseModal = () => {
    setAdminModal(false);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td>
          <button
            onClick={() => {
              setModal(true);
            }}
            className="btn btn-outline btn-secondary mr-3"
          >
            Make Instructor
          </button>
          <button
            onClick={() => setAdminModal(true)}
            className="btn btn-outline btn-accent"
          >
            Make Admin
          </button>
        </td>
      </tr>
      <InstructorModal
        email={user?.email}
        instructorModalHandler={instructorModalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></InstructorModal>
      <AdminModal
        email={user?.email}
        adminModalHandler={adminModalHandler}
        isOpen={adminModal}
        adminCloseModal={adminCloseModal}
      ></AdminModal>
    </>
  );
};

export default AllUserTable;
