import { CalendarDays, MapPin, Phone, ClipboardList } from "lucide-react";

export default function StudentApplication() {
  const application = {
    name: "Rohit Sharma",
    phone: "9876543210",
    district: "Dibrugarh",
    branch: "Dibrugarh Town Branch",
    dateSubmitted: "2025-11-07",
    status: "Pending",
    notifications: [
      {
        id: 1,
        message: "Your enquiry has been received.",
        time: "2 hours ago",
      },
      {
        id: 2,
        message: "Branch admin is reviewing your application.",
        time: "1 hour ago",
      },
    ],
  };

  return (
    <div className="relative p-6 min-h-screen bg-linear-to-br from-indigo-50 via-white to-pink-50">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <h2 className="text-3xl font-bold text-gray-800">
            My Application Status
          </h2>

          <div className="mr-10 mt-1"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-6 border shadow-sm bg-linear-to-br from-white via-blue-50/40 to-indigo-50/40 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Application Details
          </h3>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-indigo-600" />
              <strong>Name:</strong> {application.name}
            </p>

            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <strong>Phone:</strong> {application.phone}
            </p>

            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-pink-600" />
              <strong>District:</strong> {application.district}
            </p>

            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <strong>Branch:</strong> {application.branch}
            </p>

            <p className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-green-600" />
              <strong>Date Submitted:</strong> {application.dateSubmitted}
            </p>

            <p className="mt-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow 
                ${
                  application.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : application.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                Current Status: {application.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
