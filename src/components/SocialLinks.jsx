import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

/**
 * Renders fixed social links with accessible targets.
 * @returns {JSX.Element} Social links sidebar.
 */
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={24} />
        </>
      ),
      href: "https://www.linkedin.com/in/juan-pablo-montoya-vallejo-6240a0137/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={24} />
        </>
      ),
      href: "https://github.com/jmontoyavallejo",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={24} />
        </>
      ),
      href: "mailto:jpmvallejo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={24} />
        </>
      ),
      href: "/JuanPabloMontoya_EN.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <aside className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex h-14 w-44 translate-x-[-110px] items-center justify-between
              bg-gray-700 px-4 text-white duration-300 hover:translate-x-0 ${style || ""}`}
          >
            <a
              href={href}
              className="flex w-full items-center justify-between"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SocialLinks;