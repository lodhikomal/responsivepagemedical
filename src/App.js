import logo from "./logo.svg";
import "./App.css";
import HealthNav from "./component/HealthNav";
import Display from "./component/Display";
import Card from "./component/Card";
import Viewers from "./component/Viewers";

function App() {
  return (
    <div className="App">
      <HealthNav />
      <Display />
      <Card />
      <Viewers />
    </div>
  );
}

export default App;
