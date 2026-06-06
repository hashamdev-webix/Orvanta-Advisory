import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-12 max-w-[1920px]">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Orvanta Advisory Logo" 
            className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-12">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
            >
              <Link
                to={link.to}
                className={`text-[15px] xl:text-base font-medium transition-all duration-200 hover:text-secondary relative group flex items-center gap-1 ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/') ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-200 ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/') ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </div>
          ))}
          <Link to="/sign-up">
            <Button className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-[15px] xl:text-base px-6 xl:px-8 h-11">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground hover:text-secondary transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-border px-6 py-3 space-y-0 animate-fade-in-up shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-1.5 text-base font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.to ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <Link to="/sign-up" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold h-12 text-base">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
