import React from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders an impact-focused professional summary section.
 * @returns {JSX.Element} About section content.
 */
const About = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.18);

  return (
    <section
      ref={sectionRef}
      name="about"
      className={`ai-section w-full bg-gradient-to-b from-[#111e4f] to-[#171c44] text-white
        ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-20">
        <div className="pb-8">
          <h2 className="inline border-b-4 border-gray-500 text-4xl font-bold">
            About
          </h2>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-gray-300">
              I am a Senior Architect focused on AI and data engineering systems that are reliable,
              scalable, and aligned with business outcomes.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              I lead architecture decisions from discovery to production and coordinate teams,
              priorities, and stakeholders to deliver measurable platform results.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              I also lead a team of data engineers in the transition to AI, accelerating data
              migrations across cloud environments.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              I am based in Medellin, Colombia, and open to hybrid and fully remote roles.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-5">
            <article className="glass-card rounded-lg p-5">
              <h3 className="text-lg font-semibold text-cyan-200">Architecture Leadership</h3>
              <p className="mt-2 text-gray-200">
                Designed cloud and ML architectures for enterprise data and AI initiatives.
              </p>
            </article>
            <article className="glass-card rounded-lg p-5">
              <h3 className="text-lg font-semibold text-cyan-200">Delivery Ownership</h3>
              <p className="mt-2 text-gray-200">
                Led planning with epics, stories, and sprint priorities across delivery teams.
              </p>
            </article>
            <article className="glass-card rounded-lg p-5">
              <h3 className="text-lg font-semibold text-cyan-200">Platform Execution</h3>
              <p className="mt-2 text-gray-200">
                Built ETL and inference workflows using Python, pandas, polars, and containers.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;