"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { SiteSettings } from "@/lib/types";
import ThemeToggle from "./ThemeToggle";

interface Props {
  settings?: SiteSettings;
}

export default function Navbar({ settings }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const shortName = settings?.shortName ?? "Chandra Kanth";
  const role = settings?.role ?? "Product Design And Management | IIIT Hyderabad";
  const logoLetter = settings?.logoLetter ?? "C";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["hero", "about", "case-studies", "projects"];
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

        const contactElement = document.getElementById("contact");
        if (contactElement) {
          const contactRect = contactElement.getBoundingClientRect();
          if (contactRect.top <= 150) {
            foundSection = "";
          }
        }

        setActiveSection(foundSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { label: "Hello!", href: "/", section: "hero" },
    { label: "About", href: "/#about", section: "about" },
    { label: "Case Studies", href: "/#case-studies", section: "case-studies" },
    { label: "Projects", href: "/#projects", section: "projects" },
    { label: "Journey", href: "/journey" },
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
        const navHeight = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
        <motion.div
          className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-white/85 dark:bg-black/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40 border border-black/10 dark:border-white/10"
              : "bg-white/70 dark:bg-black/70 backdrop-blur-lg border border-black/5 dark:border-white/5"
          }`}
        >
          <div className="flex items-center justify-between px-6 lg:px-8 h-14">
            <Link href="/" className="group flex items-center gap-4 shrink-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-8 h-8 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                  <span className="font-bold text-base">{logoLetter}</span>
                </div>
              </motion.div>

              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-base text-black dark:text-white tracking-tight leading-none">
                  {shortName}
                </span>
                <span className="text-xs font-medium text-black/50 dark:text-white/50 tracking-wider uppercase">
                  {role}
                </span>
              </div>
            </Link>

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
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute inset-0 rounded-xl bg-black/[0.06] dark:bg-white/10"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                              mass: 0.8,
                            }}
                          />
                        )}

                        <motion.div
                          className="absolute inset-0 rounded-xl bg-black/[0.04] dark:bg-white/5 opacity-0"
                          variants={{
                            hover: {
                              opacity: 1,
                              scale: 1.05,
                              transition: { duration: 0.3 },
                            },
                          }}
                        />

                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive
                              ? "text-black dark:text-white"
                              : "text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>

                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-black dark:bg-white rounded-full"
                          initial={false}
                          animate={{ width: isActive ? "75%" : "0%" }}
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

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
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
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <motion.div
                    className="relative px-5 py-2 text-xs font-semibold text-white bg-black dark:text-black dark:bg-white rounded-xl overflow-hidden cursor-pointer"
                    whileHover="hover"
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
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
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <motion.button
                className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
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
          </div>
        </motion.div>
      </motion.nav>

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
              className="bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40 border border-black/10 dark:border-white/10 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
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
                        className="relative px-5 py-3.5 text-base font-medium text-black/80 dark:text-white/80 rounded-lg overflow-hidden"
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-black/[0.04] dark:bg-white/5 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="relative">{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

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
                        window.scrollTo({
                          top: elementPosition - navHeight,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <motion.div
                      className="relative px-5 py-3.5 text-base font-semibold text-white dark:text-black rounded-lg text-center overflow-hidden bg-black dark:bg-white"
                      whileTap={{ scale: 0.98 }}
                    >
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
