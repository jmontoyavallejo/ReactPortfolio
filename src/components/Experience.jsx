import React from "react";
import azure from "../assets/azure.png";
import docker from "../assets/docker.png";
import gcp from "../assets/gcp.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import powerbi from "../assets/powerbi.png";
import python from "../assets/python.png";
import reactImage from "../assets/react.png";
import { FaLinux } from "react-icons/fa";
import { SiAmazonaws, SiDatabricks, SiJenkins, SiSnowflake, SiTerraform } from "react-icons/si";
import tailwind from "../assets/tailwind.png";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders capabilities, role snapshot, and certifications.
 * @returns {JSX.Element} Experience and credibility section.
 */
const Experience = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.15);

  const capabilityGroups = [
    {
      id: 1,
      title: "Cloud and Infrastructure",
      items: ["AWS", "Terraform", "ECR", "S3", "GCS integration", "Architecture design"],
    },
    {
      id: 2,
      title: "Data Engineering",
      items: ["Python ETL", "pandas", "polars", "Data quality", "Pipeline orchestration"],
    },
    {
      id: 3,
      title: "ML and GenAI",
      items: ["SageMaker", "Bedrock", "RAG foundations", "Responsible AI", "Model integration"],
    },
    {
      id: 4,
      title: "DevOps and Governance",
      items: ["Jenkins", "SonarQube", "Jira delivery planning", "Sprint backlog ownership"],
    },
  ];
  const technologies = [
    { id: 1, title: "Terraform", Icon: SiTerraform },
    { id: 2, title: "AWS", Icon: SiAmazonaws },
    { id: 3, title: "Databricks", Icon: SiDatabricks },
    { id: 4, title: "Snowflake", Icon: SiSnowflake },
    { id: 5, title: "Linux", Icon: FaLinux },
    { id: 6, title: "Jenkins", Icon: SiJenkins },
    { id: 7, title: "JavaScript", src: javascript },
    { id: 8, title: "React", src: reactImage },
    { id: 9, title: "Tailwind", src: tailwind },
    { id: 10, title: "MySQL", src: mysql },
    { id: 11, title: "Python", src: python },
    { id: 12, title: "GitHub", src: github },
    { id: 13, title: "Azure DevOps", src: azure },
    { id: 14, title: "Docker", src: docker },
    { id: 15, title: "Google Cloud", src: gcp },
    { id: 16, title: "Power BI", src: powerbi },
  ];

  return (
    <section
      ref={sectionRef}
      name="experience"
      className={`ai-section w-full bg-gradient-to-b from-[#171c44] to-[#17223e] text-white
        ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-20">
        <div className="pb-8">
          <h2 className="inline border-b-4 border-gray-500 text-4xl font-bold">
            AI and Data Architecture Highlights
          </h2>
          <p className="py-6 text-gray-300">
            Current responsibilities, core capabilities, and proof of professional growth.
          </p>
        </div>

        <div className="glass-card mb-12 rounded-xl p-7">
          <h3 className="text-2xl font-semibold text-cyan-300">Current Role Snapshot</h3>
          <ul className="mt-5 grid gap-3 text-gray-100 md:grid-cols-2">
            <li className="rounded-lg border border-blue-200/20 bg-black/20 p-4">
              Designed and led cloud, data, and ML architecture initiatives at Slalom.
            </li>
            <li className="rounded-lg border border-blue-200/20 bg-black/20 p-4">
              Owned architecture planning and technical execution across AWS workloads.
            </li>
            <li className="rounded-lg border border-blue-200/20 bg-black/20 p-4">
              Directed delivery planning with epics, stories, and sprint prioritization.
            </li>
            <li className="rounded-lg border border-blue-200/20 bg-black/20 p-4">
              Built ETL flows from multi-cloud sources to ML-enabled transformation paths.
            </li>
            <li className="rounded-lg border border-blue-200/20 bg-black/20 p-4 md:col-span-2">
              Led a team of data engineers in the transition to AI to accelerate data migrations.
            </li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilityGroups.map((group, index) => (
            <article
              key={group.id}
              className="glass-card rounded-xl p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h4 className="text-xl font-semibold text-white">{group.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="ai-chip px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="glass-card mt-10 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-cyan-300">Certifications and Credentials</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-emerald-300/40 bg-emerald-500/10 p-4">
              <p className="text-lg font-semibold tracking-wide text-emerald-200">
                Databricks Certified Data Engineer Associate
              </p>
            </li>
            <li className="rounded-xl border border-sky-300/40 bg-sky-500/10 p-4">
              <p className="text-lg font-semibold tracking-wide text-sky-200">
                Google Cloud Digital Leader
              </p>
            </li>
            <li className="rounded-xl border border-amber-300/40 bg-amber-500/10 p-4">
              <p className="text-lg font-semibold tracking-wide text-amber-200">
                AWS Certified Cloud Practitioner
              </p>
            </li>
            <li className="rounded-xl border border-violet-300/40 bg-violet-500/10 p-4">
              <p className="text-lg font-semibold tracking-wide text-violet-200">
                AWS AI Technical Practitioner
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-cyan-300">Technologies I enjoy using</h3>
          <p className="mt-2 text-gray-300">
            I use this stack frequently across AI, data engineering, and cloud delivery.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map(({ id, title, src, Icon }, index) => (
              <article
                key={id}
                className="glass-card rounded-lg p-4 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {src ? (
                  <img
                    src={src}
                    alt={`${title} icon`}
                    className="mx-auto h-14 w-14 object-contain"
                  />
                ) : (
                  <Icon className="mx-auto h-10 w-10 text-cyan-200" />
                )}
                <p className="mt-2 text-sm text-gray-200">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;