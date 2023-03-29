import Header from "./Components/Header";
import Home from "./pages/Home";
import styles from './app.module.css'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t } = useTranslation();

  const dir = t('dir');
  useEffect(() => {
    document.querySelector('html').setAttribute('dir', dir);
  }, [dir]);

  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
