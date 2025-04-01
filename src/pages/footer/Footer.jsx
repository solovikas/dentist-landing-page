import "./Footer.css";
import inst from "../../assets/inst.svg";
import tg from "../../assets/tg.svg";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" id="contacts">
        <div className="hours">
          <p className="column-name">ВРЕМЯ РАБОТЫ:</p>
          <p>
            Пн.-пт.: 8:00 - 21:00
            <br />
            Сб.-Вс.: 9:00 - 15:00
          </p>
        </div>
        <div className="address">
          <p className="column-name">АДРЕС:</p>
          <p>
            г. Минск, ул. Фогеля, д. 1,
            <br />
            пом. 233 (мкр. Уручье)
          </p>
        </div>
        <div className="location">
          <p className="column-name">МЕСТО РАБОТЫ:</p>
          <a
            href="https://dentista.by"
            hrefLang="ru"
            target="_blank"
            rel="noopener noreferrer"
            title="Место работы - стоматологическая клиника Дентиста"
          >
            Дентиста
          </a>
        </div>
        <div className="phone">
          <p className="column-name">ЗВОНИТЕ:</p>
          <p>
            +375 17 337-33-11
            <br />
            +375 44 537-33-11
          </p>
        </div>
        <div className="inst">
          <div>
            <img src={inst} />
            <a
              href=""
              hrefLang="ru"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram для связи"
            >
              @скоробудет
            </a>
          </div>
        </div>
        <div className="tg">
          <div>
            <img src={tg} />
            <a
              href="https://t.me/stomartsiom"
              hrefLang="ru"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram для связи"
            >
              @stomartsiom
            </a>
          </div>
        </div>
        <p className="all-rights-reserved">&copy; 2025 Все права защищены.</p>
      </div>
    </footer>
  );
}
