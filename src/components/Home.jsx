import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/Fotovigente2026.jpg";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders the hero section with senior architect positioning.
 * @returns {JSX.Element} Home hero content.
 */
const Home = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.2);

  return (
    <section
      ref={sectionRef}
      name="home"
      className={`ai-section min-h-screen w-full bg-gradient-to-b from-[#0a1028]
        via-[#0a1235] to-[#111e4f] ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto grid min-h-screen w-full max-w-screen-xl items-center gap-8 px-4 py-20
        md:grid-cols-2"
      >
        <div className="reveal-up max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Senior Architect at Slalom
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            AI and Data Engineering Architect
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I design and implement cloud-native data and ML architectures across AWS services,
            multi-account data flows, and GenAI platforms.
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-300">
            My work combines architecture leadership, delivery ownership, and practical execution
            using Python, Terraform, Jenkins, SageMaker, and Bedrock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="ai-chip">AWS</span>
            <span className="ai-chip">Data Platforms</span>
            <span className="ai-chip">GenAI</span>
            <span className="ai-chip">MLOps</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group cta-btn cursor-pointer bg-gradient-to-r from-cyan-500 to-violet-600"
            >
              View Case Studies
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="cta-btn cursor-pointer border border-cyan-300/60 text-cyan-100"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={HeroImage}
            alt="Juan Pablo Montoya portrait"
            className="w-full max-w-sm rounded-2xl border border-blue-300/25 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;