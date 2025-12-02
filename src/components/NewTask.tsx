import React, { useState } from "react";

interface AddTaskProp {
  newTaskC: (
    name: string,
    date: string,
    time: string,
    status: string,
    creationDate: number,
    discription?: string
  ) => void;
}

const NewTask: React.FC<AddTaskProp> = ({ newTaskC }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDiscription, setTaskDiscription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("0");

  return (
    <div className="formWrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newTaskC(
            taskName,
            taskDate,
            taskTime,
            "To be completed",
            new Date().getTime(),
            taskDiscription
          );
          // console.log(new Date(`${taskDate}T02:${taskTime}Z`).getMinutes());
          // console.log(new Date("2025-11-23T02:" + "13:00Z"));
        }}
      >
        <div>
          <label htmlFor="taskName">Task name</label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="what you are going to do ...."
            required
            onChange={(a) => setTaskName(a.target.value)}
          />
        </div>
        <div>
          <label htmlFor="discription">Discription</label>
          <textarea
            onChange={(a) => setTaskDiscription(a.target.value)}
            name="taskDiscription"
            id="discription"
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(a) => setTaskDate(a.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="taskTime">Time</label>
          <input
            type="time"
            name="taskTime"
            id="taskTime"
            required
            onChange={(a) => setTaskTime(a.target.value)}
          />
        </div>
        <div id="btn-div">
          <input type="submit" value="Create Task" />
        </div>
      </form>
    </div>
  );
};

export { NewTask };
