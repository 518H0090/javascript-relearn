import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="main">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
