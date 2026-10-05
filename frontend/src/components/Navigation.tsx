"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Briefcase, FileText, User } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiLogout, apiAdminLogout } from "@/lib/api";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("/#home");

  useEffect(() => {
    // eslint-disable-next-line
    setLoggedIn(!!(sessionStorage.getItem("rehab_token") || localStorage.getItem("rehab_token")));
    setAdminLoggedIn(!!(sessionStorage.getItem("rehab_admin_token") || localStorage.getItem("rehab_admin_token")));
    setRole(sessionStorage.getItem("rehab_role"));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname !== "/") return;
      const sections = ["home", "about", "verticals", "services", "projects", "companies", "knowledge", "careers", "contact"];
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2.5) {
            currentSection = section;
          }
        }
      }
      setActiveSection("/#" + currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const publicLinks = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "About Us", href: "/#about", icon: User },
    { name: "RBN", href: "/#verticals", icon: FileText },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Projects", href: "/#projects", icon: Briefcase },
    { name: "Key Clients", href: "/#companies", icon: Briefcase },
    { name: "Knowledge", href: "/#knowledge", icon: FileText },
    { name: "Careers", href: "/#careers", icon: User },
    { name: "Contact", href: "/#contact", icon: FileText },
  ];

  const customerLinks = [
    { name: "Home",        href: "/",            icon: Home },
    { name: "Services",   href: "/services",    icon: Briefcase },
    { name: "My Requests", href: "/my-requests", icon: FileText },
    { name: "Profile",     href: "/profile",     icon: User },
  ];

  const adminEmployeeLinks = [
    { name: "Home", href: "/", icon: Home },
  ];

  // Determine which link set to show
  let links = publicLinks;
  if (role === "admin" || role === "employee" || adminLoggedIn) {
    links = adminEmployeeLinks;
  } else if (loggedIn && role === "customer") {
    links = customerLinks;
  }

  const handleLogout = () => {
    apiLogout();
    apiAdminLogout();
    setLoggedIn(false);
    setAdminLoggedIn(false);
    setRole(null);
    router.push("/");
  };

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 pb-safe pt-2">
        <ul className="flex justify-between items-center h-14">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = (pathname === "/" && link.href.startsWith("/#")) ? activeSection === link.href : pathname === link.href;
            return (
              <li key={link.name}>
                <Link href={link.href} className={clsx("flex flex-col items-center justify-center space-y-1", isActive ? "text-navy" : "text-concrete hover:text-navy-deep")}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium tracking-wide">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>



      {/* Desktop Top Navigation */}
      <nav className="hidden md:block sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center mr-6">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/logomain.png" width={180} height={60} alt="Rehab Technologies" className="object-contain" />
                </Link>
              </div>
              <div className="hidden lg:flex space-x-4 items-center">
                {links.map((link) => {
                  const isActive = (pathname === "/" && link.href.startsWith("/#")) ? activeSection === link.href : pathname === link.href;
                  return (
                    <Link key={link.name} href={link.href} className={clsx("inline-flex items-center px-1 pt-1 border-b-2 text-[11px] uppercase tracking-wider font-bold transition-colors whitespace-nowrap", isActive ? "border-navy text-navy" : "border-transparent text-concrete hover:border-gray-300 hover:text-navy-deep")}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {(loggedIn || adminLoggedIn) ? (
                  <button onClick={handleLogout} className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-danger shadow-sm hover:bg-red-800 transition-colors">
                    Log Out
                  </button>
                ) : (
                  <Link href="/login" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-navy shadow-sm hover:bg-navy-deep transition-colors">
                    Login / Register
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
