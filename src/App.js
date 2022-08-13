import "./App.css";
import Hero from "./Components/Hero";
import Plans from "./Components/Plans/Plans";
import Copyright from "./Components/Programs/Copyright/Copyright";
import Program from "./Components/Programs/Program";
import Reason from "./Components/Reasons/Reason";
import Testimonal from "./Components/Testimonal/Testimonal";

function App() {
  return (
    <>
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonal />
      <Copyright />
    </>
  );
}

export default App;
