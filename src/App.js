import "./App.css";
import HealthNav from "./component/HealthNav";
import Display from "./component/Display";
import Card from "./component/Card";
import ResuableComponnet from "./component/ResuableComponnet";
import Adress from "./component/Adress";
// import Viewers from "./component/Viewers";

function App() {
  return (
    <div className="App">
      <HealthNav />
      <Display />
      <Card />
      <ResuableComponnet />
      <Adress />
    </div>
  );
}

export default App;
