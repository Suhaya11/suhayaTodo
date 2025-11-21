import "./App.css";
import Header from "./components/Header";
import { NewTask } from "./components/NewTask";

function App() {
  class Task {
    constructor(
      private name: string,
      private date: string,
      private time: string,
      private discription?: string
    ) {}
  }
  const myTasks: object[] = [];
  const newTaskC = (
    name: string,
    date: string,
    time: string,
    discription?: string
  ) => {
    const myTask = new Task(name, date, time, discription);
    myTasks.push(myTask);
    console.log(myTasks);
  };
  // newTaskC("suhaya", 33, 33, "normal");
  // newTaskC("suhaya", 33, 33, "normal");
  // newTaskC("suhaya", 33, 33, "normal");
  // newTaskC("suhaya", 33, 33, "normal");
  // newTaskC("suhaya", 33, 33, "normal");
  // console.log(myTasks);

  return (
    <>
      <Header />

      <div className="wrapper">
        <NewTask newTaskC={newTaskC} />
      </div>
    </>
  );
}

export default App;
