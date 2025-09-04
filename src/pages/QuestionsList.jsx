import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaFilter,
  FaSearch,
  FaSort,
} from "react-icons/fa";

const QuestionsList = () => {
  return (
    <div id="question-list-page" className="page p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Question List</h2>
        <div className="flex space-x-2">
          <button
            id="filter-toggle-btn"
            className="btn-primary px-4 py-2 rounded-lg"
          >
            <FaFilter className="inline mr-2" />
            Toggle Filter
          </button>
          <button className="btn-primary px-4 py-2 rounded-lg">
            <FaDownload className="inline mr-2" />
            Export
          </button>
        </div>
      </div>
      {/* Filter Section */}
      <div id="filter-section" className="card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Year
            </label>
            <select
              id="filter-year"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Years</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Tutor
            </label>
            <select
              id="filter-tutor"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Tutors</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
              <option value="3">Robert Johnson</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Class
            </label>
            <select
              id="filter-class"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Classes</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
              <option value="class5">Class 5</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Section
            </label>
            <select
              id="filter-section"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Sections</option>
              <option value="Section A">Section A</option>
              <option value="Section B">Section B</option>
              <option value="Section C">Section C</option>
              <option value="Section D">Section D</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Subject
            </label>
            <select
              id="filter-subject"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              id="apply-filter-btn"
              className="btn-primary px-4 py-2 rounded-lg w-full"
            >
              <FaSearch className="inline mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Results Section */}
      <div className="card overflow-hidden">
        {/* Global Search */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              id="global-search"
              placeholder="Global search..."
              className="pl-10 pr-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="text-sm text-gray-600">
            Showing <span id="showing-count">0</span> of{" "}
            <span id="total-count">0</span> results
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="table-header">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>SL</span>
                    <button className="sort-btn ml-1 text-xs" data-column="sl">
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="sl"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>Tutor Name</span>
                    <button
                      className="sort-btn ml-1 text-xs"
                      data-column="tutor"
                    >
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="tutor"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>Year</span>
                    <button
                      className="sort-btn ml-1 text-xs"
                      data-column="year"
                    >
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="year"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>Class</span>
                    <button
                      className="sort-btn ml-1 text-xs"
                      data-column="class"
                    >
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="class"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>Section</span>
                    <button
                      className="sort-btn ml-1 text-xs"
                      data-column="section"
                    >
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="section"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span>Subject</span>
                    <button
                      className="sort-btn ml-1 text-xs"
                      data-column="subject"
                    >
                      <FaSort className="sort-icon" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="column-search mt-1 bg-white px-2 py-1 text-xs border border-[var(--color-gray)] rounded w-full"
                    data-column="subject"
                    placeholder="Search..."
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              id="question-table-body"
              className="bg-white divide-y divide-gray-200"
            >
              {/* Table rows will be dynamically added here */}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              id="prev-page-mobile"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              id="next-page-mobile"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span id="start-record">1</span> to{" "}
                <span id="end-record">10</span> of{" "}
                <span id="total-records">0</span> results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                id="pagination"
              >
                <button
                  id="prev-page"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft />
                </button>
                {/* Page numbers will be dynamically added here */}
                <button
                  id="next-page"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionsList;
