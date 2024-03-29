import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../Asset/icons/logo.png";
import { Items } from "../constant/NavbarItems";
import styles from "./header.module.css";
import { useTranslation } from "react-i18next";
import Selectlanguage from "./common/Selectlanguage";
import { useEffect, useState } from "react";

function Header() {
  const { t } = useTranslation();
  const [permission, setPermission] = useState(Notification.permission);

  const eventhandler = () => {
    if (Notification.permission === "granted") {
      new Notification("New Message", {
        body: "you have new message from sajad ",
        icon: "../Asset/icon/logo.png",
      });
    }
  };

  const notificationhander = () => {
    Notification.requestPermission().then((permission) => {
      setPermission(permission);
    });
    if (permission === "granted") {
      console.log("granted permission");
    } else {
      console.log("permission faild");
    }
  };
  return (
    <Navbar className={`${styles.navbar}`} bg="light" expand="lg">
      <div className="container-xl">
        <Navbar.Brand
          className=" d-flex flex-row-reverse  justify-content-center align-items-center"
          href="#"
        >
          <span onClick={eventhandler} className="">
            {t("navbar.app-name")}
          </span>
          <img
            onClick={notificationhander()}
            className={styles.image}
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className={styles.collapse} id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Items.map((i) => {
              return (
                <Nav.Link key={i.id} className={styles.Cname} href="#">
                  <span className={styles.span}>{t(i?.name)}</span>
                  <span>{i?.icon}</span>
                </Nav.Link>
              );
            })}
          </Nav>
          <Selectlanguage />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
