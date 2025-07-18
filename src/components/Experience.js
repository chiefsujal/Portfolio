import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
          position="MERN Stack Intern"
          company="Grid RnD"
          companyLink="https://gridrnd.in/"
          time="Dec 2024 – Jan 2025"
          address="Remote – Bangalore"
          work="Worked on Visume AI, an AI-powered job portal, where I developed and optimized core backend modules using Node.js, Express, and MySQL. Improved database performance by optimizing queries, resulting in 15% faster load times. Contributed to both frontend and backend features in a fast-paced, production-grade codebase, collaborating closely with senior engineers to ship scalable features under tight deadlines."
          />

          <Details
            position="Finance Secretary"
            company="IIIT Nagpur"
            companyLink="https://iiitn.ac.in"
            time="2024-2025"
            address="Nagpur, India"
            work="Managing the SAC budget exceeding 1 crore, overseeing financial aspects of multiple college fests, including Tantrafiesta 2024 with a budget of 24 lakhs, and securing sponsorships exceeding event budgets."
          />

          <Details
            position="Design Lead"
            company="Abhivyakti 2024"
            companyLink="https://iiitn.ac.in"
            time="2023-2024"
            address="Nagpur, India"
            work="Led a team to design the Abhivyakti cultural fest website, managed event designs, and successfully organized activities like Canvas Chronicles, Musica Nox, and Rang-E-Vaad."
          />

          <Details
            position="Core Team Member"
            company="Google Developer Student Club (GDSC)"
            companyLink="https://developers.google.com/community/gdsc"
            time="2023-2024"
            address="Nagpur, India"
            work="Managed media and designs for GDSC activities, ensuring professional and engaging visuals for events and workshops."
          />

          <Details
            position="Strokes Design Club Head"
            company="IIIT Nagpur"
            companyLink="https://iiitn.ac.in"
            time="2023"
            address="Nagpur, India"
            work="Organized design competitions and exhibitions, mentored junior designers, and contributed to the overall creative vision of college events."
          />

          <Details
            position="Event Organizer"
            company="Tantrafiesta 2023"
            companyLink="https://iiitn.ac.in"
            time="2023"
            address="Nagpur, India"
            work="Coordinated multiple events, including a women-only hackathon and STEM panels, managing logistics and budgets effectively."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
