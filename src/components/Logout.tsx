import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-6 py-4 
      text-red-400 hover:text-red-200 
      bg-zinc-800 hover:bg-zinc-700 
      rounded-xl font-semibold text-lg transition-all duration-300"
    >
      <LogOut className="h-6 w-6" />
      Logout
    </button>
  );
}
