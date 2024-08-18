import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../screens/loginPage";
import { StudentDashboard } from "../screens/student/studentDashboard";
import { AuthorityDashboard } from "../screens/authoritie/authoritieDashboard";
import COEDashboard from "../screens/coe/coeDashboard";

export const MainNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/authoritie-dashboard" element={<AuthorityDashboard />} />
        <Route path="/coe-dashboard" element={<COEDashboard />} />
      </Routes>
    </Router>
  );
};
