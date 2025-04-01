import React from "react";
import "./Education.css";
import Img1 from "../../assets/image 1.jpg";
import Img2 from "../../assets/image 2.jpg";
import Img3 from "../../assets/image 3.jpg";
import Img4 from "../../assets/image 4.jpg";
import { easeInOut, motion } from "framer-motion";

export default function Education() {
  const scrollAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };
  const lineAnimation = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (custom) => ({
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut },
    }),
  };
  return (
    <motion.section
      className="education"
      initial="hidden"
      whileInView="visible"
      variants={scrollAnimation}
      viewport={{ once: true }}
    >
      <header>
        <h2>ОБРАЗОВАНИЕ</h2>
      </header>
      <div className="education-info">
        <article className="education-text">
          Окончил БГМУ (Белорусский государственный медицинский университет)
          в 2013 году. Получил первую квалификационную категорию в 2019 году.
          В 2020 закончил клиническую ординатуру по челюстно-лицевой хирургии.
          Постоянный участник семинаров, мастер-классов, практических курсов,
          в том числе и за рубежом.
        </article>
        <motion.div
          className="line"
          initial="hidden"
          whileInView="visible"
          variants={lineAnimation}
          viewport={{ once: true }}
          custom={2}
        ></motion.div>
        <article>
          <ul>
            <li>2015 г. «Комплексное лечение тканей периодонта»</li>
            <li>2017 г. «Керамические виниры от А до Z»</li>
            <li>2019 г. «Нормализация окклюзии при стираемости»</li>
            <li>
              2020 г. Galip Gurel «The concept of modern restoration: occlusion,
              personalised design, minimal invasion, pink aesthetics»
            </li>
            <li>
              2022 г. Юров Т. Ю., Чёрный Д. А. «Концепция All-On-4 от оттиска до
              установки готовой конструкции»
            </li>
            <li>2023 г. «Цифровые технологии и коррекция окклюзии»</li>
            <li>2023 г. Гиви Орджоникидзе «Временное протезирование»</li>
            <li>
              2024 г. Гамид Насуев «Факторы выбора ортопедической конструкции»
            </li>
            <li>
              2024 г. Новиченко Р. С. «Комплексная реабилитация на зубах и
              имплантах»
            </li>
          </ul>
        </article>
        <motion.div
          className="line"
          initial="hidden"
          whileInView="visible"
          variants={lineAnimation}
          viewport={{ once: true }}
          custom={10}
        ></motion.div>
        <figure className="education-imgs">
          <img src={Img1} alt="Врач-стоматолог Минск" loading="lazy" />
          <img src={Img2} alt="Медицинские услуги в Минске" loading="lazy" />
          <img
            src={Img3}
            alt="Эстетическая и функциональная ортопедическая стоматология и реабилитация"
            loading="lazy"
          />
          <img src={Img4} alt="Лечение винирами" loading="lazy" />
        </figure>
        <motion.div
          className="line"
          initial="hidden"
          whileInView="visible"
          variants={lineAnimation}
          viewport={{ once: true }}
          custom={2}
        ></motion.div>
      </div>
    </motion.section>
  );
}
