import React from "react";
import "./Problems.css";
import { easeInOut, motion } from "framer-motion";

export default function Problems() {
  const scrollAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: easeInOut },
    }),
  };
  return (
    <motion.section
      className="problems"
      initial="hidden"
      whileInView="visible"
      variants={scrollAnimation}
      viewport={{ once: true }}
    >
      <header>
        <h2>
          ПРОБЛЕМЫ, С КОТОРЫМИ
          <br />Я МОГУ ПОМОЧЬ
        </h2>
      </header>
      <div className="problems-list">
        <div className="problem-row">
          <div className="problem">
            <p>
              <span>01</span>вам не нравится цвет&nbsp;
              <br />
              или форма зубов
            </p>
            <div className="line"></div>
          </div>
          <div className="problem">
            <p>
              <span>05</span>разрушена коронка&nbsp;
              <br />
              зуба
            </p>
            <div className="line"></div>
          </div>
        </div>
        <div className="problem-row">
          <div className="problem">
            <p>
              <span>02</span>отсутствует один&nbsp;
              <br />
              или несколько зубов
            </p>
            <div className="line"></div>
          </div>
          <div className="problem">
            <p>
              <span>06</span>щелчки и боль в височно-
              <br />
              нижнечелюстном суставе
            </p>
            <div className="line"></div>
          </div>
        </div>
        <div className="problem-row">
          <div className="problem">
            <p>
              <span>03</span>разрушены или стерты зубы
            </p>
            <div className="line"></div>
          </div>
          <div className="problem">
            <p>
              <span>07</span>неправильная высота прикуса
            </p>
            <div className="line"></div>
          </div>
        </div>
        <div className="problem-row">
          <div className="problem">
            <p>
              <span>04</span>зубы анатомически&nbsp;
              <br />
              неправильно расположены,&nbsp;
              <br />
              eсть щели между зубов
            </p>
            <div className="line"></div>
          </div>
          <div className="problem">
            <p>
              <span>08</span>есть трещины&nbsp;
              <br />
              или повреждения&nbsp;
              <br />
              эмали зубов
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
