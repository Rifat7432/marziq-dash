import { Users } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const growthData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 280 },
  { month: "Mar", value: 180 },
  { month: "Apr", value: 90 },
  { month: "May", value: 450 },
  { month: "Jun", value: 380 },
  { month: "Jul", value: 320 },
  { month: "Aug", value: 280 },
  { month: "Sep", value: 200 },
  { month: "Oct", value: 150 },
  { month: "Nov", value: 100 },
  { month: "Dec", value: 300 },
];

const recentUsers = Array(5).fill({
  photo: "https://i.pravatar.cc/40?img=3",
  name: "Alex Smith",
  email: "test@gmail.com",
  phone: "(555) 563 3546",
  joinDate: "23 Sep 25\n11:34 PM",
  status: "Active",
});

const statCards = [
  { label: "Total User", sub: "Total registered user since", value: "4.4K" },
  { label: "New User", sub: "Total users who registered their account on this month", value: "4.4K" },
  { label: "Free Plan User", sub: "Total users who are using free plan on this month", value: "4.4K" },
  { label: "Subscribed User", sub: "Total users who are using the app by purchased subscription", value: "4.4K" },
];

const Dashboard = () => {
  return (
    <div className="min-h-full min-w-0 bg-[#F8FAFC] font-['Urbanist',sans-serif]">
      {/* User Overview */}
      <h2 className="mb-5 text-xl font-black text-gray-900 sm:text-2xl">
        User Overview
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 sm:rounded-2xl sm:p-5"
          >
            <div className="flex items-start justify-between">
              <div className="min-w-0 pr-3">
                <p className="text-2xl font-black text-gray-900">{card.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">
                  {card.label}
                </p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {card.sub}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Users size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Growth Overview */}
      <div className="mb-8 rounded-xl border border-gray-100 bg-white p-4 sm:rounded-2xl sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-black text-gray-900 sm:text-xl">
            Growth Overview
          </h3>
          <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg font-medium">
            Jan 20226
          </span>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={growthData}>
            <XAxis dataKey="month" hide />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              ticks={[0, 10, 20, 50, 100, 500, 1000]}
              scale="log"
              domain={[1, 1100]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#374151"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Users who joined today */}
      <h3 className="mb-4 text-lg font-black text-gray-900 sm:text-xl">
        Users who joined today
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white sm:rounded-2xl">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] sm:min-w-[760px]">
          <thead>
            <tr className="border-b border-gray-100">
              {["SL", "Photo", "User", "Email Address", "Phone Number", "Join Date", "Status"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-500"
                >
                  <span className="whitespace-nowrap">{h}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="px-6 py-4 text-sm text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </td>
                <td className="px-6 py-4">
                  <div className="w-10 h-12 bg-gray-100 rounded-xl" />
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-emerald-500">
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
