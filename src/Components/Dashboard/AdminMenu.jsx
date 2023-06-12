import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/all-user"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FaUsers className="w-5 h-5" />

        <span className="mx-4 font-medium">All User</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
