import "./App.css";
import Header from "./components/Header";
import { NewTask } from "./components/NewTask";
import Tasks from "./components/Tasks";
interface myTaskArrMember {
  name: string;
  date: string;
  time: string;
  creationDate: Date;
  discription?: string;
}
function App() {
  class Task {
    constructor(
      public name: string,
      public date: string,
      public time: string,
      public creationDate: Date,
      public discription?: string
    ) {}
  }

  const myTasks: myTaskArrMember[] = [
    // {
    //   name: "going to school",
    //   date: new Date().getUTCDate(),
    //   time: new Date().getHours(),
    // },
  ];
  const newTaskC = (
    name: string,
    date: string,
    time: string,
    creationDate: Date,
    discription?: string
  ) => {
    const myTask = new Task(name, date, time, creationDate, discription);
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
        <Tasks myTasks={myTasks} />
        <NewTask newTaskC={newTaskC} />
      </div>
    </>
  );
}

export default App;
