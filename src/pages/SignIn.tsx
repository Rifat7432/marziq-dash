import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-['Urbanist',sans-serif]">
      <div className="w-full max-w-[840px] rounded-2xl overflow-hidden flex shadow-2xl">
        {/* Left Panel */}
        <div className="w-[40%] bg-[#EDE9E0] flex items-center justify-center p-10">
          <div className="w-44 h-44 rounded-full border-2 border-gray-800 flex items-center justify-center">
            <span
              className="text-3xl font-bold text-gray-800"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Xchange
            </span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white flex items-center justify-center px-10 py-14">
          <div className="w-full max-w-sm">
            <h1 className="text-[28px] font-black text-gray-900 mb-1">
              Sign In
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              Continue with your email address &amp; password
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#F5F5F0] rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/30 border border-transparent focus:border-[#4A5C45]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-[#F5F5F0] rounded-xl px-4 py-3 pr-11 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/30 border border-transparent focus:border-[#4A5C45]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-[#4A5C45]"
                  />
                  <span className="text-sm text-gray-600">Remember Me</span>
                </label>
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm font-bold text-gray-800 hover:text-[#4A5C45] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A5C45] text-white rounded-full py-3.5 font-semibold text-sm hover:bg-[#3d4e39] transition-colors mt-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;