import {
  Phone,
  MapPin,
  CalendarDays,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function BranchApplications() {
  const applications = [
    {
      id: 1,
      name: "Sandeep Sharma",
      district: "Jorhat",
      phone: "9876543210",
      status: "Pending",
      date: "2025-11-06",
    },
    {
      id: 2,
      name: "Ankita Devi",
      district: "Sivasagar",
      phone: "9988776655",
      status: "Pending",
      date: "2025-11-05",
    },
  ];

  return (
    <div className="p-6 min-h-screen ">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Branch Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="border border-gray-200 shadow-sm rounded-2xl p-6 
            bg-linear-to-br from-white via-indigo-50/40 to-pink-50/40 
            hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {app.name}
              </h3>

              <span
                className={`px-3 py-1 text-xs rounded-full font-medium shadow-sm
                  ${
                    app.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : app.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {app.status}
              </span>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-600" />
                <strong>Phone:</strong> {app.phone}
              </p>

              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-pink-600" />
                <strong>District:</strong> {app.district}
              </p>

              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-green-600" />
                <strong>Date:</strong> {app.date}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all shadow-md">
                <CheckCircle className="h-4 w-4" />
                Approve
              </button>

              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all shadow-md">
                <XCircle className="h-4 w-4" />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
