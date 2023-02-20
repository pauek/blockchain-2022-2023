import "./App.css";
import Beer from "./components/Beer";
import Counter from './components/Counter';
import BombillaTextual from './components/BombillaTextual';

// Los componentes son funciones *puras*

function App() {
  return (
    <div>
      <Counter incr={5} />
      <BombillaTextual />
      <Beer name="Blanquita" price={2.7} />
      <Beer name="Negrita" price={2.9} />
    </div>
  );
}

export default App;
