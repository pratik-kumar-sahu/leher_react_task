import {
  TopContainer,
  MainContainer,
  LeftContainer,
  BottomContainer,
} from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <LeftContainer />
      <div className="App__container">
        <TopContainer />
        <MainContainer />
      </div>
      <BottomContainer />
    </div>
  );
}

export default App;
