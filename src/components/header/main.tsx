import { motion } from "framer-motion";
import style from "./style.module.css";
import logo from "../../images/passport.jpg";
import whatsapp from "../../images/whatsapp.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/business.png";

const Header = () => {
  return (
    <>
      <motion.section
        className={style.picture}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p>AKPATRE DAVID</p>
        <p> independent IT Personel</p>
      </motion.section>

      <motion.section
        className={style.sideBySide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <p>Akpatre David</p>
          <p>IT Professional</p>

          <div className={style.socialContainer}>
            <a
              href="https://wa.me/2348167661230"
              target="_blank"
              rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={whatsapp}
                alt="whatsapp"
                className={style.Socialimage}
              />
            </a>

            <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={instagram}
                alt="instagram"
                className={style.Socialimage}
              />
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={twitter}
                alt="twitter"
                className={style.Socialimage}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/akpatre-david"
              target="_blank"
              rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={linkedin}
                alt="linkedin"
                className={style.Socialimage}
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <img src={logo} alt="Logo" className={style.image} />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Header;
