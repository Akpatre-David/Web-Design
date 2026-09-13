import style from "./style.module.css";
import code from "../../images/code (1).png";
import testing from "../../images/testing (1).png";
import security from "../../images/security (1).png";

const Skills = () => {
  return (
    <section className={style.container}>
      <p>Skills</p>
      <div className={style.divheader}>
        {cardData.map((cardType, index) => (
          <div key={index} className={style.card}>
            <div>
              <img
                src={cardType.icons}
                alt={cardType.label}
                className={style.icon}
              />
            </div>
            <div>{cardType.label}</div>
            <p className={style.text}>{cardType.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

export const cardData = [
  {
    icons: code,
    label: "Development",
    text: "I specialize in building responsive and user-friendly web interfaces using React, JavaScript, HTML, and CSS. I can integrate APIs, perform unit testing, and ensure seamless front-end functionality aligned with user experience and security best practices.",
  },
  {
    icons: testing,
    label: "Testing",
    text: "I specialize in software quality assurance, with hands-on experience in both manual and automated testing. I can design and execute comprehensive test cases, covering positive, negative, boundary, and edge scenarios. I use tools like Selenium with Python for automation, JMeter for performance testing, and New Relic for monitoring system performance.",
  },
  {
    icons: security,
    label: "Security",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!Consectetur commodi adipisci, ipsum sunt delectus atque blanditiisimpedit aliquid similique facere cupiditate assumenda facilis harumexpedita dicta libero tempora.",
  },
  {
    icons: security,
    label: "DevOps",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!Consectetur commodi adipisci, ipsum sunt delectus atque blanditiisimpedit aliquid similique facere cupiditate assumenda facilis harumexpedita dicta libero tempora.",
  },
];
