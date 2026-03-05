"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on homepage
      if (pathname === "/") {
        const sections = [
          "hero",
          "about",
          "journey",
          "projects",
          "case-studies",
        ];

        let foundSection = "";
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              foundSection = section;
              break;
            }
          }
        }

        // Check if we're at contact section - if so, clear active section
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          const contactRect = contactElement.getBoundingClientRect();
          if (contactRect.top <= 150) {
            foundSection = "";
          }
        }

        setActiveSection(foundSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  const navItems = [
    { label: "Hello!", href: "/", section: "hero" },
    { label: "About", href: "/#about", section: "about" },
    { label: "Journey", href: "/#journey", section: "journey" },
    { label: "Projects", href: "/#projects", section: "projects" },
    { label: "Case Studies", href: "/#case-studies", section: "case-studies" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 100; // Adjust based on navbar height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update active section
        setActiveSection(sectionId);
      }
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      >
        {/* Full-Width Glass Container */}
        <motion.div
          className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-slate-900/85 backdrop-blur-xl shadow-2xl shadow-black/30 border border-cyan-500/20"
              : "bg-slate-900/75 backdrop-blur-lg border border-white/10"
          }`}
        >
          {/* Subtle top glow */}
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="flex items-center justify-between px-6 lg:px-8 h-14">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-4 shrink-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                {/* Logo container */}
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base">C</span>
                </div>
              </motion.div>

              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-none">
                  Chandra Kanth
                </span>
                <span className="text-xs font-medium text-cyan-400/80 tracking-wider uppercase">
                  Product Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-center mx-12">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.section;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <motion.div
                        className="relative px-4 py-2 text-xs font-semibold cursor-pointer group"
                        whileHover="hover"
                      >
                        {/* Active background */}
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/25 to-blue-500/25"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                              mass: 0.8,
                            }}
                          />
                        )}

                        {/* Slide background on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 opacity-0"
                          variants={{
                            hover: {
                              opacity: 1,
                              scale: 1.05,
                              transition: { duration: 0.3 },
                            },
                          }}
                        />

                        {/* Text */}
                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive
                              ? "text-cyan-400"
                              : "text-white group-hover:text-cyan-300"
                          }`}
                        >
                          {item.label}
                        </span>

                        {/* Bottom indicator - show when active */}
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          initial={false}
                          animate={{
                            width: isActive ? "75%" : "0%",
                          }}
                          variants={{
                            hover: {
                              width: "75%",
                              transition: { duration: 0.3, ease: "easeOut" },
                            },
                          }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="hidden lg:block shrink-0"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    const navHeight = 100;
                    const elementPosition =
                      contactSection.getBoundingClientRect().top +
                      window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <motion.div
                  className="relative px-5 py-2 text-xs font-semibold text-white rounded-xl overflow-hidden cursor-pointer"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600"
                    variants={{
                      hover: {
                        scale: 1.05,
                        transition: { duration: 0.3, ease: "easeOut" },
                      },
                    }}
                  />

                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    variants={{
                      hover: {
                        translateX: "200%",
                        transition: { duration: 0.8, ease: "easeInOut" },
                      },
                    }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-0 -z-10"
                    variants={{
                      hover: {
                        opacity: 0.7,
                        transition: { duration: 0.3 },
                      },
                    }}
                  />

                  <span className="relative flex items-center gap-2 z-10">
                    Let&apos;s Talk
                    <motion.span
                      variants={{
                        hover: {
                          x: 3,
                          transition: { duration: 0.2 },
                        },
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.div>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden px-6"
          >
            <motion.div
              className="bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* Top glow */}
              <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <motion.div
                        className="relative px-5 py-3.5 text-base font-medium text-gray-300 rounded-lg overflow-hidden"
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Hover background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />

                        <span className="relative">{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  className="pt-4"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        const navHeight = 100;
                        const elementPosition =
                          contactSection.getBoundingClientRect().top +
                          window.pageYOffset;
                        const offsetPosition = elementPosition - navHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <motion.div
                      className="relative px-5 py-3.5 text-base font-semibold text-white rounded-lg text-center overflow-hidden"
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />

                      {/* Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-30 -z-10" />

                      <span className="relative">Let&apos;s Talk</span>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
