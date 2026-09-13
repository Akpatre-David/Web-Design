import style from "./style.module.css";
import logo from "../../images/passport.jpg";

const AboutMe = () => {
  return (
    <section className={style.container}>
      <div>
        <img src={logo} alt="Logo" className={style.image} />
      </div>

      <div>
        <p>About Me</p>
        <p>
          {/* I am David Akpatre, an IT professional with hands-on experience across
          front-end development, software testing, and system administration.
          During my time as a React Developer at Cyberspace Nigeria, I developed
          and implemented responsive UI components, conducted API integration
          using Swagger, and carried out thorough scenario testing and unit
          testing to ensure application reliability. At the Association of
          Nigerian Software Testers (ANST), I served as a QA Intern, where I
          created and executed automated test scripts using Python and Selenium,
          reviewed software requirements, and used tools like JMeter and New
          Relic to boost system performance and uptime. Earlier, as a System
          Administrator Intern at TD Africa, I managed and configured IT
          infrastructure, executed system upgrades across 200+ workstations, and
          maintained disaster recovery protocols to ensure system reliability.
          My experience demonstrates a consistent track record of improving
          performance, ensuring software quality, and delivering secure,
          user-centered solutions. */}
          Experienced IT professional with strong expertise in software
          development, end-to-end software testing (including manual and
          automated testing), and IT infrastructure management. Skilled in
          designing and executing comprehensive test plans, creating and
          maintaining test scripts using tools like Selenium and Python, and
          ensuring robust quality assurance throughout the software development
          lifecycle (SDLC). Adept at troubleshooting infrastructure issues,
          optimizing system performance, and supporting seamless deployment
          environments to enhance operational efficiency and product
          reliability.
        </p>

        <a href="/pdf/AkpatreDavid.pdf" className={style.button} download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
