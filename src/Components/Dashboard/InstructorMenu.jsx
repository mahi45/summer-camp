import { NavLink } from "react-router-dom";
import { VscSymbolClass } from "react-icons/vsc";
import { AiFillAppstore } from "react-icons/ai";

const InstructorMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/add-class"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <VscSymbolClass className="w-5 h-5" />

        <span className="mx-4 font-medium">Add Class</span>
      </NavLink>

      <NavLink
        to="/dashboard/my-classes"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiFillAppstore className="w-5 h-5" />

        <span className="mx-4 font-medium">My Classes</span>
      </NavLink>
    </>
  );
};

export default InstructorMenu;
