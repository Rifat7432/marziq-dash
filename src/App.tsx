import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "./components/layout/Layout";
import SignIn from "./pages/SignIn";
import ForgotPasswordEmail from "./pages/ForgotPasswordEmail";
import ForgotPasswordOTP from "./pages/ForgotPasswordOTP";
import ForgotPasswordSetNew from "./pages/ForgotPasswordSetNew";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPasswordEmail />} />
        <Route path="/forgot-password/verify-otp" element={<ForgotPasswordOTP />} />
        <Route path="/forgot-password/set-new-password" element={<ForgotPasswordSetNew />} />

        {/* Dashboard */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;