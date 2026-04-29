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
    <div className="p-8 bg-[#F8FAFC] min-h-full font-['Urbanist',sans-serif]">
      <h2 className="text-2xl font-black text-gray-900 mb-6">Users</h2>

      {/* Controls */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-sm text-gray-500">
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
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/20 w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {["SL", "Photo", "User", "Email Address", "Phone Number", "Join Date", "Status", "Action"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-500"
                >
                  {h}
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