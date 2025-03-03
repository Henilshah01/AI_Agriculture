import { useAuth, UserButton } from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { Loader2 } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/aboutus", label: "About Us" },
];

function Header() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <>
      <nav className="fixed h-16 z-50 bg-green-100 dark:bg-green-900 border-b-2 border-green-200 dark:border-green-800 px-32 top-0 left-0 w-full flex justify-between items-center p-4">
        <Link to="/">
          <img className="h-14 w-14" src="/Logo.png" alt="Farmer Logo" />
        </Link>

        <ul className="flex gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-green-900 dark:text-green-100" : "text-green-700 dark:text-green-400"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="flex gap-4">
          <ThemeToggler />
          {isLoaded && isSignedIn ? (
            <UserButton />
          ) : isLoaded ? (
            <Link className="bg-green-900 dark:bg-green-100 text-green-100 dark:text-green-900 hover:bg-green-200 dark:hover:bg-green-800 hover:text-green-800 dark:hover:text-green-200 px-3 py-1 rounded-sm transition-colors" to="/auth/signin">
              Sign in
            </Link>
          ) : (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
}

export default Header;
