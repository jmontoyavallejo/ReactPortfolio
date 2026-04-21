import React from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

/**
 * Renders the contact section with clear collaboration CTA.
 * @returns {JSX.Element} Contact form section.
 */
const Contact = () => {
  const [sectionRef, isVisible] = useRevealOnScroll(0.15);

  return (
    <section
      ref={sectionRef}
      name="contact"
      className={`ai-section w-full bg-gradient-to-b from-[#112646] to-[#0b1633] p-4 text-white
        ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center p-4">
        <div className="pb-8">
          <h2 className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Contact
          </h2>
          <p className="py-6 text-gray-300">
            Let&apos;s discuss AI, data architecture, or migration opportunities.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/c36cdf4b-3323-4077-9886-a02a7e4d640c"
            method="POST"
            className="glass-card flex w-full flex-col rounded-xl p-6 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border border-blue-200/25 bg-black/20 p-3 text-white
                focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border border-blue-200/25 bg-black/20 p-3 text-white
                focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="rounded-md border border-blue-200/25 bg-black/20 p-3 text-white
                focus:outline-none"
            />
            <button
              type="submit"
              className="cta-btn mx-auto my-8 bg-gradient-to-r from-cyan-500 to-violet-600"
            >
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;