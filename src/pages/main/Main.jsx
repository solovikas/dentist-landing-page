import React, { useRef, useContext, createContext, useState } from "react";
import "./Main.css";
import { easeInOut, motion } from "framer-motion";

const mainContext = createContext();
const headerHeightContext = createContext();

export default function Main({ children }) {
  const mainRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const buttonAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.3, ease: easeInOut },
    }),
  };

  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.6, ease: easeInOut },
    }),
  };

  return (
    <headerHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
      <mainContext.Provider value={mainRef}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="main"
          ref={mainRef}
          style={{ marginTop: headerHeight }}
        >
          <div className="main-content">
            <section className="main-info">
              <motion.div
                custom={1}
                variants={textAnimation}
                viewport={{ once: true }}
              >
                <header>
                  <h1>АРТЁМ</h1>
                  <h1>МАЙСТРЕНКОВ</h1>
                </header>
                <p>врач I квалификационной категории</p>
              </motion.div>
              <motion.a
                custom={4}
                variants={buttonAnimation}
                viewport={{ once: true }}
                href="#contacts"
                className="button-desc"
              >
                СВЯЗАТЬСЯ
              </motion.a>
            </section>
            <motion.figure
              variants={imageAnimation}
              custom={2}
              viewport={{ once: true }}
              className="main-img"
              alt="Врач-стоматолог Минск"
            ></motion.figure>
            <a href="#contacts" className="button-mob">
              СВЯЗАТЬСЯ
            </a>
          </div>
        </motion.section>
        {children}
      </mainContext.Provider>
    </headerHeightContext.Provider>
  );
}

export const useMainRef = () => {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("useMainRef must be used within a Main provider");
  }
  return context;
};

export const useHeaderHeight = () => {
  const context = useContext(headerHeightContext);
  if (!context) {
    throw new Error("useMainRef must be used within a Main provider");
  }
  return context;
};
