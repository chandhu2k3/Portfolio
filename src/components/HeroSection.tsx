"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[auto_auto] gap-8 lg:gap-12 lg:items-center lg:justify-center">
          {/* Profile Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 lg:gap-4"
          >
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-blue-950/50 backdrop-blur-sm border-2 lg:border-4 border-cyan-500/30 shadow-2xl">
              {/* Subtle gradient overlay to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-blue-950/30 z-10 pointer-events-none" />
              <img
                src="/images/chanduformal.jpg"
                alt="Chandra Kanth"
                className="w-full h-full object-cover opacity-95"
              />
            </div>
            <h2 className="text-sm sm:text-base lg:text-xl font-bold text-white tracking-tight text-center">
              Nagam Chandrakanth Reddy
            </h2>
            <h4 className="text-xs lg:text-sm font-medium text-gray-300 tracking-tight text-center">Product Design & Management | IIIT Hyderabad</h4>
          </motion.div>

          {/* Main Content - Right Side */}
          <div className="text-center lg:text-left w-full max-w-xl">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight tracking-tight">
                <span className="block text-white drop-shadow-lg">
                  Product-Focused Engineer
                </span>
                <span className="block text-white drop-shadow-lg">
                  Bridging
                </span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Tech &amp; Product Thinking
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-light"
            >
             I combine a strong engineering foundation with structured product thinking to identify .{" "}
              <span className="text-cyan-400 font-medium">
                user problems, validate solutions, and build meaningful digital experiences 
              </span>{" "}
              . My focus lies in understanding  <span className="text-cyan-400 font-medium"> user needs, shaping product strategy, and translating insights into impactful products .</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="#case-studies"
                  onClick={(e) => {
                    e.preventDefault();
                    const caseStudiesSection = document.getElementById("case-studies");
                    if (caseStudiesSection) {
                      const navHeight = 100;
                      const elementPosition =
                        caseStudiesSection.getBoundingClientRect().top +
                        window.pageYOffset;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-xl font-semibold text-sm shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Explore Case Studies</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="/Chandrakanth_Resume_PM.pdf"
                
                  download
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 transition-all backdrop-blur-sm"
                >
                  Download Resume
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                  className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 transition-all backdrop-blur-sm"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none"
          >
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
