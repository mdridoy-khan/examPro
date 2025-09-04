const Confirmation = () => {
  return (
    <div id="confirmation-modal" className="modal">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Confirm Action</h3>
            <button className="close-modal text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <p className="mb-6" id="confirmation-message">
            Are you sure you want to perform this action?
          </p>
          <div className="flex justify-end">
            <button className="close-modal px-4 py-2 border rounded-lg mr-2 hover:bg-gray-100">
              Cancel
            </button>
            <button
              id="confirm-action-btn"
              className="btn-primary px-4 py-2 rounded-lg"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
