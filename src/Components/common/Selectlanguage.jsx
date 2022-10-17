import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsGlobe2 } from "react-icons/bs";
import styles from "./selectlanguage.module.css"

function Selectlanguage() {
    const { i18n } = useTranslation();

    return (
        <Dropdown className={styles.brandlng}>
            <Dropdown.Toggle className={styles.box} variant="classic" id="dropdown-basic">
                <BsGlobe2 size={20} className="mx-2" />
                <span className="mx-2">
                    {i18n.language.toUpperCase()}
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => i18n.changeLanguage('fa')} value="en" active={i18n.language === 'fa'}>FA</Dropdown.Item>
                <Dropdown.Item onClick={() => i18n.changeLanguage('en')} value="fa" active={i18n.language === 'en'}>EN</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Selectlanguage;