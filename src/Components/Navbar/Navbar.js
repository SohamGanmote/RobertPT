import styles from "./Navbar.module.css";

import menu from "../../Assets/nav/menu.svg";
import close from "../../Assets/nav/close.svg";

import logo from "../../Assets/Logo/logo.png";

import insta from "../../Assets/Social Media/instagram.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LanguageSelecter = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className={styles.backDrop} />
      <div className={styles.popUp}>
        <h1>Select Language</h1>
        <button
          onClick={() => {
            localStorage.setItem("language", "English");
            window.location.reload();
          }}
        >
          English
        </button>
        <button
          onClick={() => {
            localStorage.setItem("language", "Hindi");
            window.location.reload();
          }}
        >
          हिंदी
        </button>
      </div>
    </>
  );
};

const Navbar = () => {
  const redirect = useNavigate();
  const [display, setDisplay] = useState(false);

  const [displayPopUp, setDisplayPopUp] = useState(false);

  const language = localStorage.getItem("language");

  const displayNav = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    if (language === null) {
      setDisplayPopUp(true);
    }
  }, [language]);

  return (
    <>
      {/* Laptop, Tab Navbar */}

      <nav className={styles.nav}>
        <img src={logo} alt="" onClick={() => redirect("/")} />
        <div className={styles.navButtons}>
          <button onClick={() => redirect("/")}>
            {language === "English" ? "Home" : "होम"}
          </button>
          <button onClick={() => redirect("/about")}>
            {language === "English" ? "About" : "मेरे बारे मेँ"}
          </button>
          <button onClick={() => redirect("/result")}>
            {language === "English" ? "Result" : "परिणाम"}
          </button>
          <button onClick={() => redirect("/contact")}>
            {language === "English" ? "Contact" : "संपर्क"}
          </button>
          <a
            href="https://www.rcotterillpt.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="" />
          </a>
        </div>
      </nav>

      {/* Mobile Devices Navbar */}

      <nav className={styles.responsiveNav}>
        <img src={logo} alt="" onClick={() => redirect("/")} width="150px" />
        {!display ? (
          <img src={menu} alt="" onClick={displayNav} width="30px" />
        ) : (
          <img src={close} alt="" onClick={displayNav} width="30px" />
        )}
      </nav>
      {display && (
        <div className={styles.responsiveNavButtons}>
          <button onClick={() => redirect("/")}>
            {language === "English" ? "Home" : "होम"}
          </button>
          <button onClick={() => redirect("/about")}>
            {language === "English" ? "About" : "मेरे बारे मेँ"}
          </button>
          <button onClick={() => redirect("/result")}>
            {language === "English" ? "Result" : "परिणाम"}
          </button>
          <button onClick={() => redirect("/contact")}>
            {language === "English" ? "Contact" : "संपर्क"}
          </button>
          <a
            href="https://www.rcotterillpt.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="" />
          </a>
        </div>
      )}

      {/* Popup To select Language */}

      {displayPopUp && <LanguageSelecter />}
    </>
  );
};
export default Navbar;
