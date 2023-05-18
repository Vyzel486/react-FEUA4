import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";
import OneStateCounter from "./components/OneStateCounter";
import ClassCounter from "./components/ClassCounter";
const App = () => {
  return (
    <div>
      <h2>Class</h2>
      <Car />
      <br />
      <h2>Function with one state</h2>
      <FuncCar />
      <br />
      <h2>Function with separate states</h2>
      <FuncBestCar />
      <br />
      <h2>Counter with separate states</h2>
      <Counter />
      <br />
      <h2>Counter with one state</h2>
      <OneStateCounter />
      <br />
      <h2>Class</h2>
      <ClassCounter />
      <br />
    </div>
  );
};

export default App;
