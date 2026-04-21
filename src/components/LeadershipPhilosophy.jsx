import React from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders leadership philosophy and people management principles.
 * @returns {JSX.Element} Leadership philosophy section content.
 */
const LeadershipPhilosophy = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.16);

  const principles = [
    {
      id: 1,
      title: "Team Leadership and Decision-Making",
      points: [
        "Lead teams with clear goals, ownership, and transparent decision rationale.",
        "Balance speed and quality using risk-based delivery and architecture guardrails.",
      ],
    },
    {
      id: 2,
      title: "Hiring, Mentorship, and Growth",
      points: [
        "Support hiring and interviews with practical, role-aligned evaluation criteria.",
        "Mentor engineers with growth plans, upskilling programs, and coaching routines.",
        "Support promotions through measurable impact, leadership behaviors, and delivery.",
      ],
    },
    {
      id: 3,
      title: "Stakeholder and Incident Management",
      points: [
        "Align product, security, platform, and business stakeholders on shared outcomes.",
        "Run incident processes with clear ownership, communication, and follow-up actions.",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      name="leadership"
      className={`ai-section w-full bg-gradient-to-b from-[#14213f] to-[#121f3a] text-white
        ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-20">
        <div className="pb-8">
          <h2 className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Leadership Philosophy
          </h2>
          <p className="py-6 text-gray-300">
            How I lead teams, drive decisions, and build sustainable delivery culture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <article
              key={item.id}
              className="glass-card rounded-xl p-6"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3 className="text-xl font-semibold text-cyan-200">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-gray-200">
                {item.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPhilosophy;
