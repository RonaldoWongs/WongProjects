import React, { useEffect } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { redirectToPage1, redirectToPage2, redirectToPage3, redirectToPage4, redirectToPage5, redirectToPage6, redirectToPage7 } from "../../hooks/redirects"; // Importa las funciones de redirección

const Portfolio = () => {
  useEffect(() => {
    // Agregar eventos de clic a las imágenes aquí
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const image4 = document.getElementById("image4");
    const image5= document.getElementById("image5");
    const image6 = document.getElementById("image6");
    const image7 = document.getElementById("image7");

    if (image1) {
      image1.addEventListener("click", redirectToPage1);
    }

    if (image2) {
      image2.addEventListener("click", redirectToPage2);
    }

    if (image3) {
      image3.addEventListener("click", redirectToPage3);
    }
    if (image4) {
      image4.addEventListener("click", redirectToPage4);
    }
    if (image5) {
      image5.addEventListener("click", redirectToPage5);
    }
    if (image6) {
      image6.addEventListener("click", redirectToPage6);
    }
    if (image7) {
      image7.addEventListener("click", redirectToPage7);
    }

    // Retornar una función para limpiar los eventos al desmontar el componente
    return () => {
      if (image1) {
        image1.removeEventListener("click", redirectToPage1);
      }
      if (image2) {
        image2.removeEventListener("click", redirectToPage2);
      }
      if (image3) {
        image3.removeEventListener("click", redirectToPage3);
      }
      if (image4) {
        image3.removeEventListener("click", redirectToPage4);
      }
      if (image5) {
        image3.removeEventListener("click", redirectToPage5);
      }
      if (image6) {
        image3.removeEventListener("click", redirectToPage6);
      }
      if (image7) {
        image3.removeEventListener("click", redirectToPage7);
      }
      
      
    };
  }, []); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez después del montaje

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img id="image1" variants={fadeIn("up", "tween", 0.5, 0.6)} src="./showCase1.png" alt="project" />
          <motion.img id="image2" variants={fadeIn("up", "tween", 0.7, 0.6)} src="./showCase2.png" alt="project" />
          <motion.img id="image3" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.png" alt="project" />
          <motion.img id="image4" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase4.png" alt="project" />
          <motion.img id="image5" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase5.png" alt="project" />
          <motion.img id="image6" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase6.png" alt="project" />
          <motion.img id="image7" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase7.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;