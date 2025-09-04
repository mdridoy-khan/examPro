import { FaEye, FaKey } from "react-icons/fa";

const CreateAdmin = () => {
  return (
    <div id="create-admin-page" className="page p-6">
      <h2 className="text-2xl font-bold mb-6">Create Admin/Superadmin</h2>
      <div className="card p-6 w-full">
        <form id="create-admin-form">
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
                placeholder="admin@example.com"
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
                  id="admin-password"
                  className="w-full px-4 py-2 pr-10 border border-[var(--color-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  id="toggle-admin-password"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FaEye className="text-gray-400" />
                </button>
              </div>
              <div className="mt-2 flex items-center">
                <button
                  type="button"
                  id="generate-admin-password"
                  className="text-sm text-blue-600 hover:text-blue-800 mr-4"
                >
                  <FaKey className="inline mr-1" /> Auto Generate Password
                </button>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="send-admin-email"
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">
                    Send username and password to Gmail
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Role</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  className="mr-2"
                />
                <span>Admin</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="superadmin"
                  className="mr-2"
                />
                <span>Superadmin</span>
              </label>
            </div>
          </div>
          {/* Role Permissions */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Permissions</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="permission-card">
                <h4>General Permissions</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-dashboard"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-dashboard">Dashboard Access</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-reports"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-reports">View Reports</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-settings"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-settings">System Settings</label>
                  </li>
                </ul>
              </div>
              <div className="permission-card">
                <h4>User Management</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-tutor-view"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-tutor-view">View Tutors</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-tutor-create"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-tutor-create">Create Tutors</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-tutor-edit"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-tutor-edit">Edit Tutors</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-tutor-delete"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-tutor-delete">Delete Tutors</label>
                  </li>
                </ul>
              </div>
              <div className="permission-card">
                <h4>Content Management</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-questions-view"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-questions-view">View Questions</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-questions-create"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-questions-create">
                      Create Questions
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-questions-edit"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-questions-edit">Edit Questions</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-questions-delete"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-questions-delete">
                      Delete Questions
                    </label>
                  </li>
                </ul>
              </div>
              <div className="permission-card">
                <h4>System Administration</h4>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-admin-view"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-admin-view">View Admins</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-admin-create"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-admin-create">Create Admins</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-admin-edit"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-admin-edit">Edit Admins</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="perm-admin-delete"
                      className="permission-checkbox"
                    />
                    <label htmlFor="perm-admin-delete">Delete Admins</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 border border-[var(--color-gray)] rounded-lg mr-2 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary px-4 py-2 rounded-lg">
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateAdmin;
