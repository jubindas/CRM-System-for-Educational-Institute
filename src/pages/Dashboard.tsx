import { Users, Building2, MapPin, UserCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div
          className="rounded-2xl p-6 border border-gray-200 shadow-sm 
          bg-linear-to-br from-white via-indigo-50/40 to-blue-50/40
          flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-blue-100 p-4 rounded-xl shadow-sm">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Districts</p>
            <h3 className="text-3xl font-semibold text-gray-800">12</h3>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 border border-gray-200 shadow-sm 
          bg-linear-to-br from-white via-orange-50/40 to-yellow-50/40
          flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-orange-100 p-4 rounded-xl shadow-sm">
            <UserCheck className="w-8 h-8 text-orange-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Sub Admins</p>
            <h3 className="text-3xl font-semibold text-gray-800">32</h3>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 border border-gray-200 shadow-sm 
          bg-linear-to-br from-white via-green-50/40 to-emerald-50/40
          flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-green-100 p-4 rounded-xl shadow-sm">
            <Building2 className="w-8 h-8 text-green-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Branches</p>
            <h3 className="text-3xl font-semibold text-gray-800">18</h3>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 border border-gray-200 shadow-sm 
          bg-linear-to-br from-white via-pink-50/40 to-red-50/40
          flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-pink-100 p-4 rounded-xl shadow-sm">
            <Users className="w-8 h-8 text-pink-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <h3 className="text-3xl font-semibold text-gray-800">860</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
