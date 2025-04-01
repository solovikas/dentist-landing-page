import React from "react";
import "./About.css";
import "../../App.css";
import dentalPatch from "../../assets/dental-patch-1.svg";
import { easeInOut, motion } from "framer-motion";

export default function About() {
  const scrollAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };

  return (
    <section className="about" id="about">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
      >
        <h2>О СЕБЕ</h2>
      </motion.header>
      <article className="about-text">
        <p>Веду ортопедический прием с 2013 года.</p>
        <p>
          Специализируюсь на эстетической и функциональной реабилитации
          пациентов, провожу протезирование на своих зубах и имплантах любой
          сложности. Работаю с материалами и оборудованием экспертного класса,
          используя бинокулярную оптику и передовые технологии.
        </p>
        <p>
          В своей работе с пациентом я помогаю выбрать оптимальное решение его
          проблемы, предлагая всевозможные, а самое главное, подходящие
          индивидуально, варианты лечения. Благодаря этому мои пациенты никогда
          не сомневаются в том, что попали в правильные руки.
        </p>
        <p>
          Моё профессиональное кредо — лечение без боли, без стресса
          и с максимальным комфортом!
        </p>
      </article>
      <figure className="to-hide">
        <img src={dentalPatch} alt="Зубы" loading="lazy" />
      </figure>
    </section>
  );
}
