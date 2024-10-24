import "./App.css";
import Termekek from "./componens/Termekek";
import { adatokLista } from "./adatok";
import { useContext } from "react";
import Kosar from "./componens/Kosar";
import { KattContext } from "./context/KattContext";

function App() {
  
  const {lista} = useContext(KattContext)

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
        <p>IKEA</p>
      </header>
      <main>
        <article>
          <Termekek lista={adatokLista} />
        </article>
        <aside>
          <p>A kosár tartalma</p>
          <p>A kosárba {} db termék van</p>
          <p>A kosárban levő termékek összege: {} Ft</p>
          <Kosar lista={lista} kattintas={() => {}} />
        </aside>
        <footer>
          <p>Dobszay Dorka</p>
        </footer>
      </main>
    </div>
  );

}

export default App;
