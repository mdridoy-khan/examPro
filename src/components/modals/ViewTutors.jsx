const ViewTutors = () => {
  return (
    <div id="view-tutor-modal" className="modal">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Tutor Profile</h3>
            <button className="close-modal text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img
                src="https://picsum.photos/seed/tutor1/150/150.jpg"
                alt="Tutor Profile"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-gray-600">john.doe@example.com</p>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mt-2">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">classNamees</p>
                  <p>className 1, className 2</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sections</p>
                  <p>Section A, Section B</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Login</p>
                  <p>2023-06-15 10:30 AM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Created</p>
                  <p>2023-01-10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Questions Generated</p>
                  <p>324</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="close-modal px-4 py-2 border rounded-lg mr-2 hover:bg-gray-100">
              Close
            </button>
            <button className="btn-primary px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewTutors;
