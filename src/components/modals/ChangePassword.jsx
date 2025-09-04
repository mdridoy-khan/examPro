const ChangePassword = () => {
  return (
    <div id="change-password-modal" className="modal">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Change Password</h3>
            <button className="close-modal text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form id="change-password-form">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="close-modal px-4 py-2 border rounded-lg mr-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary px-4 py-2 rounded-lg"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
