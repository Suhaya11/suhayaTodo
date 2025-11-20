import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Tasks />
        <NewTask />
      </div>
    </>
  );
}

export default App;
