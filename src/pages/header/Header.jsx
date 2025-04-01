import logo from "../../assets/header-logo.svg";
import "./Header.css";
import React, { createContext, useEffect, useState, useRef } from "react";
import { useMainRef } from "../main/Main";
import { useHeaderHeight } from "../main/Main";
import { Link } from "react-router-dom";

export default function Header() {
  const { setHeaderHeight } = useHeaderHeight();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const mainRef = useMainRef();
  const headerRef = useRef(null);
  const [headerHeightState, setHeaderHeightState] = useState(0);

  useEffect(() => {
    const getMainHeight = () => {
      if (mainRef && mainRef.current) {
        setHeight(mainRef.current.offsetHeight);
      }
    };

    getMainHeight();

    window.addEventListener("resize", getMainHeight);

    return () => {
      window.removeEventListener("resize", getMainHeight);
    };
  }, [mainRef]);

  useEffect(() => {
    const getHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
        setHeaderHeightState(headerRef.current.offsetHeight);
      }
    };

    getHeaderHeight();

    window.addEventListener("resize", getHeaderHeight);

    return () => {
      window.removeEventListener("resize", getHeaderHeight);
    };
  }, [setHeaderHeight]);

  const secondBlockOffset = height;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > secondBlockOffset) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  const handleScrollToView = (id) => {
    const view = document.getElementById(id);
    if (view) {
      view.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className="header"
      style={{
        transform: isHidden
          ? `translateY(-${headerHeightState}px)`
          : "translateY(0)",
        transition: "transform 0.2s ease-in-out",
      }}
      ref={headerRef}
    >
      <div className="header-content">
        <img src={logo} className="header-logo" alt="Header logo" />
        <nav>
          <Link
            to="#about"
            data-text="О себе"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToView("about");
            }}
          >
            О себе
          </Link>
          <Link
            to="#services"
            data-text="Услуги"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToView("services");
            }}
          >
            Услуги
          </Link>
          <Link
            to="#contacts"
            data-text="Контакты"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToView("contacts");
            }}
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
