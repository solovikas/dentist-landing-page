import React from "react";
import "./Supremacies.css";
import { easeInOut, motion } from "framer-motion";

export default function supremacies() {
  const scrollAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };
  return (
    <section className="supremacies">
      <motion.header
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <h2>ПРЕИМУЩЕСТВА</h2>
      </motion.header>
      <div className="supremacies-container">
        <div className="supremacies-blocks">
          <article>
            <h3>ПРОФЕССИОНАЛИЗМ</h3>
            <p>
              Владею глубокими знаниями в области эстетической и функциональной
              ортопедической стоматологии
            </p>
          </article>
          <article>
            <h3>СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h3>
            <p>
              Работаю в индивидуальной бинокулярной оптике ExamVision, использую
              интраоральный сканер Primescan | Dentsply Sirona, соответствуя
              мировым стандартам стоматологии
            </p>
          </article>
          <article>
            <h3>ВНИМАНИЕ К ДЕТАЛЯМ</h3>
            <p>Замечаю тонкости и индивидуальные особенности пациента</p>
          </article>
          <article>
            <h3>КОММУНИКАБЕЛЬНОСТЬ</h3>
            <p>
              Легко устанавливаю контакт с каждым пациентом, доступным языком
              объясняю необходимые процедуры
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
