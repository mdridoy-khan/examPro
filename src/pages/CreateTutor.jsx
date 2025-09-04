import { FaEye, FaKey, FaUsers } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

const CreateTutor = () => {
  return (
    <div id="create-tutor-page" className="page p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Tutor</h2>
      <div className="card p-6 w-full">
        <form id="create-tutor-form">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Profile Image</label>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <FaUsers className="text-gray-500 text-2xl" />
              </div>
              <div>
                <button
                  type="button"
                  className="btn-primary px-4 py-2 rounded mr-2"
                >
                  Upload Image
                </button>
                <p className="text-sm text-gray-500">
                  JPG, PNG or GIF (max. 2MB)
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="tutor@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="tutor-password"
                  className="w-full px-4 py-2 pr-10 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  id="toggle-tutor-password"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FaEye className="text-gray-400" />
                </button>
              </div>
              <div className="mt-2 flex items-center">
                <button
                  type="button"
                  id="generate-tutor-password"
                  className="text-sm text-blue-600 hover:text-blue-800 mr-4"
                >
                  <FaKey className="inline mr-1" /> Auto Generate Password
                </button>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="send-tutor-email"
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">
                    Send username and password to Gmail
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* Assignment Section */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4">
              Assign Classes, Sections & Subjects
            </label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Select Class
                </label>
                <select
                  id="class-select"
                  className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option value="">Select a class</option>
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
                  id="section-select"
                  className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                  disabled
                >
                  <option value="">Select a section</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Select Subject
                </label>
                <select
                  id="subject-select"
                  className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                  disabled
                >
                  <option value="">Select a subject</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  id="add-assignment-btn"
                  className="btn-primary w-full px-4 py-2 rounded-lg flex items-center justify-center"
                  disabled
                >
                  <LuPlus className="inline mr-2" color="#000000" />
                  Add Assignment
                </button>
              </div>
            </div>
          </div>
          {/* Assignment List */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Current Assignments
            </label>
            <div
              id="assignment-list"
              className="border border-[var(--color-gray)] rounded-lg p-4 min-h-[100px] bg-gray-50 w-full"
            >
              <p className="text-gray-500 text-center py-8">
                No assignments added yet
              </p>
            </div>
            <input
              type="hidden"
              id="assignments-input"
              name="assignments"
              value=""
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 border border-[var(--color-gray)] rounded-lg mr-2 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary px-4 py-2 rounded-lg">
              Create Tutor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateTutor;
