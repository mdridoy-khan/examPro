import {
  FaQuestionCircle,
  FaUserCheck,
  FaUsers,
  FaUserTimes,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="dashboard-page" className="page p-6">
      <h2 className="font-lato  text-2xl font-bold mb-6 text-primary">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaUsers className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">Total Tutors</p>
              <p className="text-2xl font-bold">42</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaUserCheck className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">Active Tutors</p>
              <p className="text-2xl font-bold">36</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaUserTimes className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">Inactive Tutors</p>
              <p className="text-2xl font-bold">6</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaQuestionCircle className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">Total Questions</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">
            Tutor Registration Trend
          </h3>
          <canvas id="tutorChart"></canvas>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Tutor Activity</h3>
          <canvas id="activityChart"></canvas>
        </div>
      </div>
    </div>
  );
};
export default Home;
