
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Our Story", path: "/our-story" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative block py-2 font-bold transition-colors duration-300 ${
      isActive
        ? "text-[#e50914]"
        : "text-[#062b68] hover:text-[#e50914]"
    }`;

  return (
    <header className="relative z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0"
        >
          <img
            src="/images/supermax-logo.jpeg"
            alt="Supermax logo"
            className="h-16 w-auto object-contain md:h-20"
          />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-[#e50914]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#062b68] lg:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-blue-100 bg-white px-5 pb-5 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* BLUE ACCENT LINE */}
      <div className="h-2 bg-gradient-to-r from-[#062b68] to-[#0753a3]" />
    </header>
  );
}

export default Navbar;
