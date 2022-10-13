import { Container, Dropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from '../Asset/icons/logo.png'
import { Items } from '../constant/NavbarItems';
import styles from './header.module.css'
import { useTranslation } from "react-i18next";
import { BsGlobe2 } from 'react-icons/bs';
import { useState } from 'react';


function Header() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState("id");
  
  const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    t.changeLanguage(lang);
  };

  return (
    <Navbar className={`${styles.navbar} w-100`} bg="light" expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand className='d-flex flex-row-reverse justify-content-center align-items-center' href="#">

          <span className=''>{t('navbar.app-name')}</span>
          <img className=' m-2 w-25 ' src={logo} alt="logo" />
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
        <Dropdown>
          <Dropdown.Toggle onChange={handleLangChange} variant='classic' id="dropdown-basic">
            <BsGlobe2 size={20} />
            <span className={styles.span}>
              {t('navbar.language')}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu  value={language}>
            <Dropdown.Item value="en" >EN</Dropdown.Item>
            <Dropdown.Item value="fa">FA</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;