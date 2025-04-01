import React from "react";
import "./Examples.css";
import Slider from "../../components/Slider";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import img5 from "../../assets/img-5.jpg";
import img6 from "../../assets/img-6.jpg";
import img7 from "../../assets/img-7.jpg";
import img8 from "../../assets/img-8.jpg";
import img9 from "../../assets/img-9.jpg";
import { easeInOut, motion } from "framer-motion";

export default function Examples() {
  const examples = [
    {
      id: 1,
      desc: "Виниры после ортодонтического лечения",
      img: img1,
    },
    {
      id: 2,
      desc: "Протезирование винирами и коронками на имплантах",

      img: img2,
    },
    {
      id: 3,
      desc: "Протезирование на коронках и имплантах",

      img: img3,
    },
    {
      id: 4,
      desc: "Временное протезирование на четвёртые сутки после операции по протоколу All-On-4",

      img: img4,
    },
    {
      id: 5,
      desc: "Протезирование одиночной безметалловой коронкой на имплантате",

      img: img5,
    },
    {
      id: 6,
      desc: "Протезирование боковых отделов верхней и нижней челюсти безметалловыми коронками на имплантатах. Фронтальный отдел восстановлен безметалловыми коронками",

      img: img6,
    },
    {
      id: 7,
      desc: "Тотальное протезирование безметалловыми коронками на зубах и имплантатах",
      img: img7,
    },
    {
      id: 8,
      desc: "БМК жевательного отдела",

      img: img8,
    },
    {
      id: 9,
      desc: "Коррекция зубного ряда 4 БМК",

      img: img9,
    },
  ];

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
      className="examples"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimation}
    >
      <header>
        <h2>ПРИМЕРЫ РАБОТ</h2>
      </header>
      <Slider>
        {examples.map((example) => {
          const { id, desc, img } = example;

          return (
            <article key={id}>
              <div className="line"></div>
              <img src={img} alt="Лечение зубов Минск" loading="lazy" />
              <div className="line"></div>
              <p>{desc}</p>
            </article>
          );
        })}
      </Slider>
    </motion.section>
  );
}
