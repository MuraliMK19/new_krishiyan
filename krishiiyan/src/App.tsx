import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import ForgotPassword from "./pages/Authentication/callForgotPAssword";
import ForgotPasswordLink from "./pages/Authentication/ForgotPassword";
import ShowData from "./Components/ShowData";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TopNav from "./MainMenu/TopNav";

// AuthGuard Component
const AuthGuard = () => {
  const auth = localStorage.getItem("authToken"); // Check authentication
  return auth ? <Outlet /> : <Navigate to="/" />; // Redirect to Home if not authenticated
};

function App() {
  return (
    <div className="App font-roboto box-border m-0 p-0">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<ForgotPasswordLink />} />
        <Route path="/showFPOData" element={<ShowData />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Protected Routes */}
        <Route element={<AuthGuard />}>
          <Route
            path="/top"
            element={
              <>
                <TopNav />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
