import { Flex, Progress } from "antd";
import style from "./style.module.css";

const skillsInDevelopment = () => {
  return (
    <section className={style.container}>
      <div>
        <p>
          I have high skills in Development, SoftWare Testing, DevOps Engineer
          and IT infrastructure.
        </p>

        <p>
          I’m a passionate and results-driven web developer and software tester,
          DevOps Engineer with 3 years of combined experience in front-end
          development, UI/UX design, and cybersecurity. My commitment to
          creating secure, user-friendly, and scalable systems has driven
          successful projects across both corporate and academic environments. I
          thrive in collaborative settings and enjoy every stage of the
          development lifecycle from requirements gathering to final deployment.
          Whether transforming Figma designs into responsive web interfaces or
          ensuring seamless API integration, I bring precision, creativity, and
          dedication to every project I work on.
        </p>
      </div>

      <div>
        <Flex vertical>
          <p>React</p>
          <Progress percent={30} />

          <p>Quality Assurance</p>
          <Progress percent={60} />

          <p>CyberSecurity</p>
          <Progress percent={30} />

          <p>DevOps</p>
          <Progress percent={30} />
        </Flex>
      </div>
    </section>
  );
};

export default skillsInDevelopment;
