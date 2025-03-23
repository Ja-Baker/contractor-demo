
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { 
    name: "What We Do", 
    path: "/", 
    active: true 
  },
  { 
    name: "About Us", 
    path: "/about", 
    active: false 
  },
  { 
    name: "Services", 
    path: "/services", 
    active: false 
  },
  { 
    name: "Events", 
    path: "/events", 
    active: false,
    comingSoon: true
  },
  { 
    name: "Funding", 
    path: "/funding", 
    active: false,
    comingSoon: true
  },
  { 
    name: "Past Projects", 
    path: "/projects", 
    active: false,
    comingSoon: true
  },
  { 
    name: "LLC Info", 
    path: "/llc-info", 
    active: false 
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg",
        isScrolled 
          ? "bg-white/90 shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-tight transition-all duration-300 hover:opacity-80"
            >
              <span className="sr-only">Millicour</span>
              {/* Company name */}
              Millicour
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.comingSoon ? '#' : item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                  item.comingSoon && "pointer-events-none opacity-60"
                )}
              >
                {item.name}
                {item.comingSoon && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-accent text-[10px] rounded-full font-semibold">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-5 flex flex-col space-y-1.5">
              <span 
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300",
                  mobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span 
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span 
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300",
                  mobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg border-t border-border shadow-lg transition-all duration-500 overflow-hidden",
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.comingSoon ? '#' : item.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 relative",
                  location.pathname === item.path
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-primary",
                  item.comingSoon && "opacity-60"
                )}
                onClick={() => item.comingSoon && setMobileMenuOpen(false)}
              >
                {item.name}
                {item.comingSoon && (
                  <span className="absolute top-1/2 -translate-y-1/2 right-4 px-1.5 py-0.5 bg-accent text-[10px] rounded-full font-semibold">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
