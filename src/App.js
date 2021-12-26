import "./App.css";
import Buttons from "./Components/Buttons";
import Grid from "./Components/Grid";
import Confetti from "react-confetti";

function App() {
  return (
    <div>
      {/* <Confetti/> */}
      <div className="row">
        <div className="col-4">
          <Buttons />
        </div>
        <div className="col-8">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
