import React from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders selected case studies with impact-first structure.
 * @returns {JSX.Element} Portfolio section content.
 */
const Portfolio = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.15);

  const caseStudies = [
    {
      id: 1,
      title: "Multi-account ETL Modernization",
      problem: "Legacy ETL workflows needed reliability and cloud-scale orchestration.",
      architecture: "Python ETL containers, AWS services, and integrated storage flows.",
      role: "Owned solution design, milestone planning, and technical delivery alignment.",
      outcome: "Improved delivery consistency and migration speed for data workflows.",
      href: "https://github.com/jmontoyavallejo/ETL---customer-experience-project",
    },
    {
      id: 2,
      title: "GenAI Capability Accelerator",
      problem: "Teams needed practical adoption patterns for GenAI in delivery programs.",
      architecture: "Bedrock-based integration paths, governance checks, and reusable patterns.",
      role: "Led initiative design, enablement sessions, and architecture guardrails.",
      outcome: "Increased internal readiness for AI projects and architecture quality.",
      href: "https://github.com/jmontoyavallejo",
    },
    {
      id: 3,
      title: "ML API and Inference Enablement",
      problem: "Teams required deployable interfaces for ML-driven business use cases.",
      architecture: "FastAPI endpoints connected to model services and data processing layers.",
      role: "Defined integration strategy and guided implementation handoff.",
      outcome: "Reduced friction from model experimentation to consumable APIs.",
      href: "https://test-api-pr1g.onrender.com/docs",
    },
  ];
  const highlightedProjects = [
    {
      id: 1,
      title: "Supervised Learning Notebook",
      href: "/notebook.pdf",
      type: "Notebook",
    },
    {
      id: 2,
      title: "ML Frontend React",
      href: "https://ephemeral-lolly-5a0ff4.netlify.app/",
      type: "Demo",
    },
    {
      id: 3,
      title: "ML Backend FastAPI Docs",
      href: "https://test-api-pr1g.onrender.com/docs",
      type: "API",
    },
    {
      id: 4,
      title: "DataCamp Certification",
      href: "https://www.datacamp.com/certificate/DSA0018597955634",
      type: "Certificate",
    },
    {
      id: 5,
      title: "Components and Hooks",
      href: "https://peppy-panda-99c598.netlify.app/",
      type: "Demo",
    },
    {
      id: 6,
      title: "Full ETL and ML Project",
      href: "https://github.com/jmontoyavallejo/ETL---customer-experience-project",
      type: "Repository",
    },
  ];

  return (
    <section
      ref={sectionRef}
      name="portfolio"
      className={`ai-section w-full bg-gradient-to-b from-[#17223e] to-[#112646] text-white
        ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-20">
        <div className="pb-8">
          <h2 className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Selected AI and Data Engineering Case Studies
          </h2>
          <p className="py-6 text-gray-300">
            Architecture-led projects focused on outcomes, scalability, and delivery ownership.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <article
              key={item.id}
              className="glass-card rounded-xl p-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-200">
                <li>
                  <span className="font-semibold text-white">Problem:</span> {item.problem}
                </li>
                <li>
                  <span className="font-semibold text-white">Architecture:</span> {item.architecture}
                </li>
                <li>
                  <span className="font-semibold text-white">Role:</span> {item.role}
                </li>
                <li>
                  <span className="font-semibold text-white">Outcome:</span> {item.outcome}
                </li>
              </ul>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="cta-btn mt-6 inline-flex border border-cyan-300/60 text-cyan-100"
              >
                View Project
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-cyan-300">Highlighted Project Links</h3>
          <p className="mt-2 text-gray-300">
            Quick access to the projects you previously used to showcase.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlightedProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-lg p-4
                  transition duration-300 hover:border-cyan-400/60 hover:scale-[1.01]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <p className="text-sm uppercase tracking-wide text-cyan-300">{project.type}</p>
                <p className="mt-2 text-base font-semibold text-white">{project.title}</p>
                <p className="mt-2 text-sm text-gray-300">Open project</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;