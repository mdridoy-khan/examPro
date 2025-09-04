import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaEye,
  FaKey,
  FaSearch,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

const AllAdmin = () => {
  return (
    <div id="admin-list-page" className="page p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin/Super Admin List</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search admins..."
              className="pl-10 pr-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="btn-primary px-4 py-2 rounded-lg">
            <FaDownload className="inline mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Sort By</label>
            <select
              id="admin-status-filter"
              className="px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://picsum.photos/seed/admin1/40/40.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Sarah Johnson
                      </div>
                      <div className="text-sm text-gray-500">Admin</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  sarah.johnson@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  +1 (555) 123-4567
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-green-600 hover:text-green-900 mr-3 view-admin-btn"
                    data-admin-id="1"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-3 change-password-btn"
                    data-admin-id="1"
                  >
                    <FaKey />
                  </button>
                  <button
                    className="text-yellow-600 hover:text-yellow-900 toggle-status-btn"
                    data-admin-id="1"
                    data-status="active"
                  >
                    <FaToggleOn />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://picsum.photos/seed/admin2/40/40.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Michael Brown
                      </div>
                      <div className="text-sm text-gray-500">Super Admin</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  michael.brown@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  +1 (555) 987-6543
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-green-600 hover:text-green-900 mr-3 view-admin-btn"
                    data-admin-id="2"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-3 change-password-btn"
                    data-admin-id="2"
                  >
                    <FaKey />
                  </button>
                  <button
                    className="text-yellow-600 hover:text-yellow-900 toggle-status-btn"
                    data-admin-id="2"
                    data-status="active"
                  >
                    <FaToggleOn />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://picsum.photos/seed/admin3/40/40.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Emily Davis
                      </div>
                      <div className="text-sm text-gray-500">Admin</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  emily.davis@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  +1 (555) 456-7890
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-green-600 hover:text-green-900 mr-3 view-admin-btn"
                    data-admin-id="3"
                  >
                    <FaEye />
                  </button>
                  <button
                    platelet="text-blue-600 hover:text-blue-900 mr-3 change-password-btn"
                    data-admin-id="3"
                  >
                    <FaKey />
                  </button>
                  <button
                    className="text-yellow-600 hover:text-yellow-900 toggle-status-btn"
                    data-admin-id="3"
                    data-status="inactive"
                  >
                    <FaToggleOff />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">3</span> of{" "}
                <span className="font-medium">3</span> results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllAdmin;
