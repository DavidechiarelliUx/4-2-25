//1) inserire l'import per bootstrap (da fare ancora)
import {} from "react-bootstrap";
import './App.css'
import TopBar from "./components/topBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import scifi from "./books/scifi.json";
import history from "./books/history.json";
import romance from "./books/romance.json";


function App() {

  return (
    <>
      <TopBar />
      <Welcome title="Benvenuti nella EpicBooks" description="qui puoi comprare tutti i libri che vuoi!" />
      <AllTheBooks books={fantasy} title="Libri Fantasy" />
      <AllTheBooks books={horror} title="Libri Horror" />
      <AllTheBooks books={scifi} title="Libri Scifi" />
      <AllTheBooks books={history} title="Libri History" />
      <AllTheBooks books={romance} title="Libri Romance" />
      <Footer />
    </>
  );
}

export default App;
