import { Link, useLocation } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { Home, Briefcase, List, Receipt, User, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onClose?: () => void;
}

const navItems = [
  { label: "Overview", to: "/dashboard", icon: Home },
  { label: "Book LMIA Service", to: "/dashboard/book", icon: Briefcase },
  { label: "My Bookings", to: "/dashboard/bookings", icon: List },
  { label: "Invoices", to: "/dashboard/invoices", icon: Receipt },
  { label: "Profile", to: "/dashboard/profile", icon: User },
];

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="w-[280px] h-full bg-[#1a2744] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Orvanta Advisory"
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-white">
            <X size={24} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-accent/10 text-accent border-l-4 border-accent"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout button */}
      <div className="p-4 border-t border-white/10">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5"
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
