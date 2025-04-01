import React from "react";
import "./Services.css";
import Straumann from "../../assets/straumann.svg";
import Mis from "../../assets/mis.svg";
import Megagen from "../../assets/megagen.svg";
import Osstem from "../../assets/osstem.svg";
import { easeInOut, motion } from "framer-motion";

export default function Services() {
  const scrollAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };
  return (
    <motion.section
      className="services"
      id="services"
      initial="hidden"
      whileInView="visible"
      variants={scrollAnimation}
      viewport={{ once: true }}
    >
      <header>
        <h2>УСЛУГИ</h2>
      </header>
      <article className="services-list">
        <div className="services-row">
          <p>консультация</p>
          <p>от 34 BYN</p>
        </div>
        <div className="services-row">
          <p>консультация + 3D-снимок (клкт)</p>
          <p>от 70 BYN</p>
        </div>
        <div className="services-row">
          <p>винир керамический</p>
          <p>от 940 BYN</p>
        </div>
        <div className="services-row">
          <p>коронка на импланте безметалловая</p>
          <p>от 1200 BYN</p>
        </div>
        <div className="services-row">
          <p>временная коронка на импланте</p>
          <p>от 400 BYN</p>
        </div>
        <div className="services-row">
          <p>коронка на зуб безметалловая</p>
          <p>от 900 BYN</p>
        </div>
        <div className="services-row">
          <p>временная коронка / временный винир на зуб</p>
          <p>от 80 BYN</p>
        </div>
        <div className="services-row">
          <p>цифровой дизайн одного зуба (wax up)</p>
          <p>от 35 BYN</p>
        </div>
        <figure className="labels">
          <img src={Straumann} alt="Straumann" />
          <img src={Mis} alt="Mis" />
          <img src={Megagen} alt="Megagen" />
          <img src={Osstem} alt="Osstem" />
        </figure>
      </article>
    </motion.section>
  );
}
