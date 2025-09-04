import { FaTimes } from "react-icons/fa";

const ViewQuestions = () => {
  return (
    <div id="view-questions-modal" className="modal">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="modal-header">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                Questions for <span id="tutor-name"></span>
              </h3>
              <button className="close-modal text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value" id="modal-year"></span>
              </div>
              <div className="info-item">
                <span className="info-label">Class</span>
                <span className="info-value" id="modal-class"></span>
              </div>
              <div className="info-item">
                <span className="info-label">Section</span>
                <span className="info-value" id="modal-section"></span>
              </div>
              <div className="info-item">
                <span className="info-label">Subject</span>
                <span className="info-value" id="modal-subject"></span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Questions</span>
                <span className="info-value" id="total-questions"></span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Marks</span>
                <span className="info-value" id="total-marks"></span>
              </div>
            </div>
          </div>
          <div id="questions-container">
            {/* Questions will be dynamically added here */}
          </div>
          <div className="mt-6 flex justify-end">
            <button className="close-modal px-4 py-2 border rounded-lg hover:bg-gray-100">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewQuestions;
