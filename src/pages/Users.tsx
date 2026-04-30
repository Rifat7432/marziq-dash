import { useState } from "react";
import { Search, MoreVertical } from "lucide-react";
import Pagination from "../components/Pagination";

const mockUsers = Array(6).fill(null).map((_, i) => ({
  id: String(i + 1).padStart(2, "0"),
  name: "Alex Smith",
  email: "test@gmail.com",
  phone: "(555) 563 3546",
  joinDate: "23 Sep 25",
  joinTime: "11:34 PM",
  status: "Active",
}));

const Users = () => {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState("20");
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="min-h-full min-w-0 bg-[#F8FAFC] font-['Urbanist',sans-serif]">
      <h2 className="mb-6 text-xl font-black text-gray-900 sm:text-2xl">Users</h2>

      {/* Controls */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>Showing per page</span>
          <select
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-[#4A5C45]/20 bg-white"
          >
            {["10", "20", "50"].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
        <div className="relative w-full sm:w-auto">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-600 outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#4A5C45]/20 sm:w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white sm:rounded-2xl">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] sm:min-w-[880px]">
          <thead>
            <tr className="border-b border-gray-100">
              {["SL", "Photo", "User", "Email Address", "Phone Number", "Join Date", "Status", "Action"].map((h) => (
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
            {mockUsers.map((user, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="px-6 py-5 text-sm text-gray-600">{user.id}</td>
                <td className="px-6 py-5">
                  <div className="w-10 h-12 bg-gray-100 rounded-xl" />
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-5 text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-5 text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-5 text-sm text-gray-500">
                  {user.joinDate}
                  <br />
                  {user.joinTime}
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-emerald-500">
                  {user.status}
                </td>
                <td className="px-6 py-5">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={17}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        maxVisiblePages={5}
      />
    </div>
  );
};

export default Users;
