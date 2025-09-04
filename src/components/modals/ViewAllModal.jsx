const ViewAllModal = () => {
  return (
    <div id="view-all-modal" className="modal">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold" id="view-all-title">
              All Items
            </h3>
            <button className="close-modal text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="table-header">
                <tr id="view-all-table-header">
                  {/* Headers will be dynamically added */}
                </tr>
              </thead>
              <tbody
                id="view-all-table-body"
                className="bg-white divide-y divide-gray-200"
              >
                {/* Rows will be dynamically added */}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Showing <span id="view-all-count">0</span> items
            </p>
            <button className="close-modal px-4 py-2 border rounded-lg hover:bg-gray-100">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewAllModal;
