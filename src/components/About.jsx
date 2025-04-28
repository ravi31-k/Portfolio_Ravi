
// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
//         <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         I'm Ravindra Kumar — a Cybersecurity Researcher, Assistant Professor, and Software Developer with a passion for building impactful solutions in security and education. I specialize in Python, network security, and full-stack development, and have mentored numerous innovative student projects. With published research and hands-on experience in cyber platforms and real-time firewalls, I strive to merge academic insight with real-world application. Let's collaborate and create secure, scalable systems!
//       </motion.p>

//       {/* Download Resume Button */}
//       <div className="mt-8">
//         <a href="./resume.pdf" download>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
//             Download Resume
//           </button>
//         </a>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Ravindra Kumar — a Cybersecurity Researcher, Assistant Professor, and Software Developer with a passion for building impactful solutions in security and education. I specialize in Python, network security, and full-stack development, and have mentored numerous innovative student projects. With published research and hands-on experience in cyber platforms and real-time firewalls, I strive to merge academic insight with real-world application. Let's collaborate and create secure, scalable systems!
      </motion.p>

      {/* Download Resume & External Links Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="./resume.pdf" download>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Download Resume
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/ravi31/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            LINKEDIN
          </button>
        </a>

        <a
          href="https://github.com/ravi31-k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            GITHUB
          </button>
        </a>

        <a
          href="https://codolio.com/profile/Coffee_der"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Codolio Profile
          </button>
        </a>

        <a
          href="https://digitalcommons.kennesaw.edu/jcerp/vol2024/iss1/22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Research Paper
          </button>
        </a>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
