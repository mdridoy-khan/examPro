import { Route, Routes } from "react-router-dom";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import AllAdmin from "./pages/AllAdmin";
import CreateAdmin from "./pages/CreateAdmin";
import CreateClass from "./pages/CreateClass";
import CreateSection from "./pages/CreateSection";
import CreateSubject from "./pages/CreateSubject";
import CreateTutor from "./pages/CreateTutor";
import CreateYear from "./pages/CreateYear";
import Home from "./pages/Home";
import QuestionsList from "./pages/QuestionsList";
import TutorActivity from "./pages/TutorActivity";
import TutorList from "./pages/TutorList";
function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>404 | Not Found</h1>} />
      <Route element={<SuperAdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-tutor" element={<CreateTutor />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/tutor-list" element={<TutorList />} />
        <Route path="/admin-list" element={<AllAdmin />} />
        <Route path="/tutor-activity" element={<TutorActivity />} />
        <Route path="/question-list" element={<QuestionsList />} />
        <Route path="/create-year" element={<CreateYear />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/create-subject" element={<CreateSubject />} />
        <Route path="/create-section" element={<CreateSection />} />
      </Route>
    </Routes>
  );
}

export default App;
