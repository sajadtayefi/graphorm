import Header from "./Components/Header";
import Home from "./pages/Home";
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
