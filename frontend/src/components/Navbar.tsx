import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { 
    label: "Services", 
    to: "/services",
    dropdown: [
      {
        category: "Immigration",
        items: [
          { label: "Visa Services", to: "/services/immigration/visa" },
          { label: "PR Services", to: "/services/immigration/pr" },
          { label: "Work Permits", to: "/services/immigration/work-permits" },
          { label: "Study Abroad", to: "/services/immigration/study-abroad" }
        ]
      },
      {
        category: "Investments",
        items: [
          { label: "Real Estate Investments", to: "/services/investments/real-estate" },
          { label: "Stock Investments", to: "/services/investments/stocks" },
          { label: "Tax Planning", to: "/services/investments/tax-planning" },
          { label: "NRI Investments", to: "/services/investments/nri" },
          { label: "Business Investments", to: "/services/investments/business" }
        ]
      },
      {
        category: "Consultation",
        items: [
          { label: "Global Market Guidance", to: "/services/consultation/global-market" },
          { label: "Expansion and Optimization Support", to: "/services/consultation/expansion" },
          { label: "Strategic Growth Planning", to: "/services/consultation/strategic-growth" }
        ]
      },
      {
        category: "Legal Services",
        items: [
          { label: "Legal Documentation and Verification", to: "/services/legal/documentation" },
          { label: "Risk Management", to: "/services/legal/risk-management" },
          { label: "Dispute Prevention", to: "/services/legal/dispute-prevention" }
        ]
      }
    ]
  },
  { 
    label: "Locations", 
    to: "#",
    dropdown: [
      { label: "UK", to: "/locations/uk" },
      { label: "India", to: "/locations/india" },
      { label: "Hong Kong", to: "/locations/hong-kong" }
    ]
  },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const location = useLocation();
  
  // Add timeout refs for delayed closing
  const menuTimeoutRef = useState<NodeJS.Timeout | null>(null)[0];
  const categoryTimeoutRef = useState<NodeJS.Timeout | null>(null)[0];

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

  const handleMenuEnter = (label: string) => {
    if (menuTimeoutRef) clearTimeout(menuTimeoutRef);
    setHoveredMenu(label);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredCategory(null);
    }, 10000); // 10 seconds - plenty of time to read and click
    if (menuTimeoutRef) clearTimeout(menuTimeoutRef);
    Object.assign(menuTimeoutRef, timeout);
  };

  const handleCategoryEnter = (category: string) => {
    if (categoryTimeoutRef) clearTimeout(categoryTimeoutRef);
    setHoveredCategory(category);
  };

  const handleCategoryLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredCategory(null);
    }, 10000); // 10 seconds - plenty of time to read and click
    if (categoryTimeoutRef) clearTimeout(categoryTimeoutRef);
    Object.assign(categoryTimeoutRef, timeout);
  };

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
              onMouseEnter={() => link.dropdown && handleMenuEnter(link.label)}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                to={link.to}
                className={`text-[15px] xl:text-base font-medium transition-all duration-200 hover:text-secondary relative group flex items-center gap-1 ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/') ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={16} className="transition-transform duration-200" style={{ transform: hoveredMenu === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-200 ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/') ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && hoveredMenu === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-border/50 py-2 min-w-[240px] animate-fade-in-up">
                  {link.label === "Services" ? (
                    // Services nested menu - show categories first
                    <div className="space-y-1 px-2">
                      {link.dropdown.map((category: any) => (
                        <div 
                          key={category.category}
                          className="relative"
                          onMouseEnter={() => handleCategoryEnter(category.category)}
                          onMouseLeave={handleCategoryLeave}
                        >
                          <div className="px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary hover:bg-secondary/5 rounded-md transition-colors cursor-pointer flex items-center justify-between">
                            {category.category}
                            <ChevronDown size={14} className="-rotate-90" />
                          </div>
                          
                          {/* Sub-menu for category items */}
                          {hoveredCategory === category.category && (
                            <div className="absolute left-full top-0 ml-0.5 bg-white rounded-lg shadow-xl border border-border/50 py-2 min-w-[280px] animate-fade-in-up">
                              <div className="space-y-1 px-2">
                                {category.items.map((item: any) => (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-secondary/5 rounded-md transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Simple dropdown for Locations
                    <div className="space-y-1 px-2">
                      {link.dropdown.map((item: any) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-secondary/5 rounded-md transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
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
                onClick={() => !link.dropdown && setOpen(false)}
                className={`block py-1.5 text-base font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.to ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="ml-4 mt-1 space-y-0">
                  {link.label === "Services" ? (
                    link.dropdown.map((category: any) => (
                      <div key={category.category} className="mb-2">
                        <h4 className="font-semibold text-sm text-foreground mb-0.5">
                          {category.category}
                        </h4>
                        {category.items.map((item: any) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm text-muted-foreground hover:text-secondary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))
                  ) : (
                    link.dropdown.map((item: any) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-secondary"
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
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
