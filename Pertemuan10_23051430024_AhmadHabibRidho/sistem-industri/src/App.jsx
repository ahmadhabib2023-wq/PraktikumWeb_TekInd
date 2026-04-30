import KartuMesin from "./Komponen/KartuMesin";

function App() {
  return (
    <div>
      <KartuMesin nama="CNC-01" status="Running" produksi={100} />
    </div>
  );
}

import CounterProduksi from "./Komponen/CounterProduksi";

function App() {
  return (
    <div className="container">
      <CounterProduksi />
    </div>
  );
}
import JamDigital from "./Komponen/JamDigital";

function App() {
  return (
    <div>
      <JamDigital />
      <CounterProduksi />
    </div>
  );
}
import OEECalculator from "./Komponen/OEECalculator";

function App() {
  return (
    <div className="container">
      <OEECalculator />
    </div>
  );
}
export default App;
