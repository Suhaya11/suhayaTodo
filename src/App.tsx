import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { NewTask } from "./components/NewTask";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/completedTasks";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";

interface myTaskArrMember {
  name: string;
  date: string;
  time: string;
  status: string;
  creationDate: number;
  discription?: string;
}
function App() {
  class Task {
    constructor(
      public name: string,
      public date: string,
      public time: string,
      public status: string,
      public creationDate: number,
      public discription?: string
    ) {}
  }

  const [myTasks, setMyTasks] = useState([] as myTaskArrMember[]);
  const [completedTasks, setCompletedTasks] = useState([] as myTaskArrMember[]);

  const newTaskC = (
    name: string,
    date: string,
    time: string,
    status: string,
    creationDate: number,
    discription?: string
  ) => {
    const myTask = new Task(
      name,
      date,
      time,
      status,
      creationDate,
      discription
    );
    myTasks?.push(myTask);
    console.log(myTasks);
    localStorage.setItem(
      "my",
      `${JSON.stringify({
        myTasks,
      })}`
    );
  };
  document.onabort = () => {};

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("my") as string);
    if (s?.myTasks) setMyTasks(s?.myTasks);

    const c = JSON.parse(localStorage.getItem("completed") as string);
    if (c?.completedTasks) setCompletedTasks(c?.completedTasks);
  }, []);
  // useEffect(() => {
  //   localStorage.setItem(
  //     "my",
  //     `${JSON.stringify({
  //       myTasks,
  //     })}`
  //   );
  //   localStorage.setItem(
  //     "completed",
  //     `${JSON.stringify({
  //       completedTasks,
  //     })}`
  //   );
  // }, [completedTasks, myTasks]);

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
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                myTasks={myTasks}
                setMyTasks={setMyTasks}
                completedTasks={completedTasks}
                setCompletedTask={setCompletedTasks}
              />
            }
          ></Route>
          <Route path="/new" element={<NewTask newTaskC={newTaskC} />}>
            {" "}
          </Route>
          <Route
            path="/completed"
            element={
              <CompletedTasks
                completedTasks={completedTasks}
                myTasks={myTasks}
                setCompletedTask={setCompletedTasks}
              />
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
