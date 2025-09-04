import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const CreateSection = () => {
  return (
    <div id="settings-section-page" className="page p-6">
      <h2 className="text-2xl font-bold mb-6">Create Section</h2>
      <div className="card p-6 max-w-2xl">
        <form id="create-section-form">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Section Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Section A"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Class</label>
            <select className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary px-4 py-2 rounded-lg">
              Create Section
            </button>
          </div>
        </form>
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Current Sections</h3>
            <button
              className="text-purple-600 hover:text-purple-800 view-all-btn"
              data-category="sections"
            >
              <FaEye className="inline mr-1" /> View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="table-header">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Section A
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Class 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Section B
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Class 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateSection;
