import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaPython } from "react-icons/fa";
import { 
  SiFlutter, 
  SiSpringboot, 
  SiMysql, 
  SiAwsamplify, 
  SiCplusplus, 
  SiJavascript 
} from "react-icons/si"; // Added C++ & JavaScript icons
import "./skills.css";

const categorizedSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
      { name: "Flutter", icon: <SiFlutter />, level: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 75 },
      { name: "MySQL", icon: <SiMysql />, level: 70 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Java", icon: <FaJava />, level: 85 },
      { name: "C++ (Basics)", icon: <SiCplusplus />, level: 60 },
      { name: "JavaScript (Basics)", icon: <SiJavascript />, level: 65 },
      { name: "Python (Basics)", icon: <FaPython />, level: 60 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub />, level: 80 },
      { name: "AWS", icon: <SiAwsamplify />, level: 65 },
    ],
  },
];

const Skills = ({ isVisible }) => (
  <section
    id="skills"
    className={`section ${isVisible.skills ? "visible" : ""}`}
  >
    <div className="content-section">
      <h2>Skills & Technologies</h2>

      <div className="skills-category-grid">
        {categorizedSkills.map((group) => (
          <div key={group.category} className="skills-category">
            <h3>{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  title={`${skill.name} - ${skill.level}%`}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
