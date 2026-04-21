import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

/**
 * Renders responsive navigation for page sections.
 * @returns {JSX.Element} Sticky navigation bar.
 */
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
      label: "case studies",
    },
    {
      id: 4,
      link: "experience",
      label: "highlights",
    },
    {
      id: 5,
      link: "leadership",
      label: "leadership",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <header
      className="fixed z-20 flex h-20 w-full items-center justify-between border-b border-blue-300/20
        bg-[#060d22]/85 px-4 backdrop-blur"
    >
      <div>
        <h1 className="ml-2 hidden text-2xl font-semibold text-white md:flex">
          Juan Pablo Montoya Vallejo
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="cursor-pointer px-4 capitalize font-medium text-blue-100 duration-200
              hover:scale-110 hover:text-cyan-300 hover:tracking-wide"
          >
            <Link to={link} smooth duration={500}>
              {label || link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-blue-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center
            bg-gradient-to-b from-[#060d22] to-[#1a2754] text-blue-100"
        >
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize duration-200
                hover:scale-110 hover:text-cyan-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {label || link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;