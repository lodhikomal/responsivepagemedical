import logo from "./logo.svg";
import "./App.css";
import HealthNav from "./component/HealthNav";
import Display from "./component/Display";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <HealthNav />
      <Display />
      <Card />
    </div>
  );
}

export default App;
