import React, { useState } from "react";
import ResumeBox from "./ResumeBox";
import SkillsProgress from "./SkillProgress";

function Resume() {
  const [handleSkills, setHandleSkills] = useState(false);
  const [handleExperience, setHandleExperience] = useState(true);
  const [handleEducation, setHandleEducation] = useState(false);

  return (
    <div id="resume" className="xl:m-auto max-w-7xl px-5">
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          1+ Years Of Experience
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Resume
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col btn-shadow w-full justify-between items-center font-primary text-lg">
        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(true);
            setHandleEducation(false);
          }}
          className={`${
            handleExperience ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Experience
        </button>
        <button
          onClick={() => {
            setHandleSkills(true);
            setHandleExperience(false);
            setHandleEducation(false);
          }}
          className={`${
            handleSkills ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Professional Skills
        </button>

        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(false);
            setHandleEducation(true);
          }}
          className={`${
            handleEducation ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Education
        </button>
      </div>

      <div
        className={`${
          handleSkills || handleEducation || handleExperience
            ? "opacity-100"
            : ""
        } sm:flex-row w-full flex-col flex transition-all duration-1000 opacity-0`}
      >
        <div className={`sm:pr-7 mt-10 sm:w-1/2 w-full`}>
          {/* {handleSkills ? null : ( */}
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "features" : "2024"}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "Frontend Skills"
                : handleExperience
                ? "Job Experience"
                : handleEducation
                ? "Education Qaulity"
                : null}
            </h1>
          </div>
          {/* )} */}

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "Full Stack Developer"
                    : handleEducation
                    ? " Bachelor of Computer Science (CS)"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "CodeAlpha (2024)"
                    : handleEducation
                    ? "University of Sargodha (2020-2024)"
                    : null
                }
                BtnText={
                  handleExperience ? "Pak" : handleEducation ? "B Grade" : null
                }
                description={
                  handleExperience
                    ? "I contributed to CodeAlpha by developing dynamic and scalable web applications using the MERN stack, enhancing user experiences and optimizing performance for real-world applications."
                    : handleEducation
                    ? "Gained a strong foundation in computer science and specialized in web development, mastering technologies like HTML, CSS, JavaScript, and the MERN stack to build dynamic and user-focused web applications."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Intermediate" : null}
                subTitle={
                  handleEducation ? "Govt. Zamindar Post Guaduate Collage (2018 - 2020)" : null
                }
                BtnText={handleEducation ? "B Grade" : null}
                description={
                  handleEducation
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : null
                }
              />
            </div>
          ) : (
            <div className="w-full sm:pr-7">
              <SkillsProgress progressMeter="100%" skillName="Html 5" />
              <SkillsProgress progressMeter="90%" skillName="Css 3" />
              <SkillsProgress progressMeter="82%" skillName="Bootstrap 5" />
              <SkillsProgress progressMeter="91%" skillName="TailwindCss" />
              <SkillsProgress progressMeter="78%" skillName="Javascript" />
              <SkillsProgress progressMeter="76%" skillName="JQuery" />
              <SkillsProgress progressMeter="73%" skillName="Vanta.js" />
              <SkillsProgress progressMeter="70%" skillName="React / ReactBoostrap" />
              <SkillsProgress progressMeter="90%" skillName="Uiverse.io" />
              <SkillsProgress progressMeter="75%" skillName="Heroku" />
              <SkillsProgress progressMeter="83%" skillName="Netlify" />
            </div>
          )}
        </div>

        <div className={`sm:pl-7 mt-10 sm:w-1/2 w-full`}>
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "features" : "2024"}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "Backend Skills"
                : handleExperience
                ? "Freelance Experience"
                : handleEducation
                ? "Certifications"
                : null}
            </h1>
          </div>

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "Frontend Developer"
                    : handleEducation
                    ? "Web Development Course"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "Fiverr/Upwork (2023 - 2024)"
                    : handleEducation
                    ? "Udemy | The App Brewry (2022 - 2023)"
                    : null
                }
                BtnText={
                  handleExperience
                    ? "5/5"
                    : handleEducation
                    ? "Completed"
                    : null
                }
                description={
                  handleExperience
                    ? "Successfully delivered high-quality projects, leveraging HTML, CSS, Bootstrap, ReactJS, React-Bootstrap, Tailwind CSS, and other tools to create responsive, user-friendly, and visually appealing web interfaces."
                    : handleEducation
                    ? "Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Full Stack Certification" : null}
                subTitle={
                  handleEducation
                    ? "CodeAlpha (2024)"
                    : null
                }
                BtnText={handleEducation ? "Certified" : null}
                description={
                  handleEducation
                    ? "Earned certification in Full Stack Development, gaining hands-on experience with the MERN stack to build efficient, scalable, and user-centric web applications."
                    : null
                }
              />
            </div>
          ) : (
            <div className="sm:pr-7">
              <SkillsProgress progressMeter="62%" skillName="Node JS" />
              <SkillsProgress progressMeter="74%" skillName="Express" />
              <SkillsProgress progressMeter="81%" skillName="MongoDB" />
              <SkillsProgress progressMeter="83%" skillName="RestFul API's" />
              <SkillsProgress progressMeter="75%" skillName="Git" />
              <SkillsProgress progressMeter="80%" skillName="GitHub" />
              <SkillsProgress progressMeter="80%" skillName="Postman" />
              <SkillsProgress progressMeter="80%" skillName="Vercel.com" />
              <SkillsProgress progressMeter="80%" skillName="Replit.com" />
              
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
