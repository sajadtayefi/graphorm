import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from '../Asset/icons/logo.png'
import { Items } from '../constant/NavbarItems';
import styles from './header.module.css'
import { useTranslation } from "react-i18next";
import Selectlanguage from './common/Selectlanguage';


function Header() {
  const { t } = useTranslation();

  return (
    <Navbar className={`${styles.navbar} w-100`} bg="light" expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand className=' d-flex flex-row-reverse justify-content-center align-items-center' href="#">
          <span className=''>{t('navbar.app-name')}</span>
          <img className={styles.image} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {Items.map((i) => {
              return (
                <Nav.Link key={i.id} className={styles.Cname} href="#" >
                  <span className={styles.span} >{t(i?.name)}</span>
                  <span>{i?.icon}</span>
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        <Selectlanguage />


      </Container>
    </Navbar>
  );
}

export default Header;