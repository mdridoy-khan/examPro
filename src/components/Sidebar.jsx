import { useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaChalkboard,
  FaChalkboardTeacher,
  FaChevronDown,
  FaCog,
  FaHistory,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUserPlus,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="sidebar w-64 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Tutor Management</h1>
        <p className="text-sm">Super Admin Panel</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4">
        <ul>
          {/* Dashboard */}
          <li className="mb-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-green-200 ${
                  isActive ? "active-nav" : ""
                }`
              }
            >
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </NavLink>
          </li>

          {/* Add User */}
          <li className="mb-2">
            <button
              onClick={() => toggleDropdown("addUser")}
              className="flex items-center w-full p-2 rounded hover:bg-green-200"
            >
              <FaUserPlus className="mr-3" />
              Add User
              <FaChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "addUser" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "addUser" && (
              <ul className="ml-6 mt-2">
                <li className="mb-1">
                  <NavLink
                    to="/create-tutor"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaChalkboardTeacher className="mr-3" />
                    Create Tutor
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/create-admin"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaUserShield className="mr-3" />
                    Create Admin/Superadmin
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* User List */}
          <li className="mb-2">
            <button
              onClick={() => toggleDropdown("userList")}
              className="flex items-center w-full p-2 rounded hover:bg-green-200"
            >
              <FaUsers className="mr-3" />
              User List
              <FaChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "userList" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "userList" && (
              <ul className="ml-6 mt-2">
                <li className="mb-1">
                  <NavLink
                    to="/tutor-list"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaChalkboardTeacher className="mr-3" />
                    Tutor List
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/admin-list"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaUserShield className="mr-3" />
                    Admin/Super Admin List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Tutor Activity */}
          <li className="mb-2">
            <NavLink
              to="/tutor-activity"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-green-200 ${
                  isActive ? "active-nav" : ""
                }`
              }
            >
              <FaHistory className="mr-3" />
              Tutor Activity
            </NavLink>
          </li>

          {/* Question List */}
          <li className="mb-2">
            <NavLink
              to="/question-list"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-green-200 ${
                  isActive ? "active-nav" : ""
                }`
              }
            >
              <FaQuestionCircle className="mr-3" />
              Question List
            </NavLink>
          </li>

          {/* Settings */}
          <li className="mb-2">
            <button
              onClick={() => toggleDropdown("settings")}
              className="flex items-center w-full p-2 rounded hover:bg-green-200"
            >
              <FaCog className="mr-3" />
              Settings
              <FaChevronDown
                className={`ml-auto transition-transform ${
                  openDropdown === "settings" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "settings" && (
              <ul className="ml-6 mt-2">
                <li className="mb-1">
                  <NavLink
                    to="/create-year"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaCalendarAlt className="mr-3" />
                    Create Year
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/create-class"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaChalkboard className="mr-3" />
                    Create Class
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/create-subject"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaBook className="mr-3" />
                    Create Subjects
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/create-section"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded hover:bg-green-200 ${
                        isActive ? "active-nav" : ""
                      }`
                    }
                  >
                    <FaUsers className="mr-3" />
                    Create Section
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center p-2 rounded hover:bg-green-200 ${
              isActive ? "active-nav" : ""
            }`
          }
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
