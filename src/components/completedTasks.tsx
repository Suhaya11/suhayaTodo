import getTimeDefference from "./getTimeDefference";
interface myTaskArrMember {
  name: string;
  date: string;
  time: string;
  status: string;
  creationDate: number;
  discription?: string;
}
interface myProps {
  completedTasks: myTaskArrMember[];
  myTasks: myTaskArrMember[];
  setCompletedTask: React.Dispatch<React.SetStateAction<myTaskArrMember[]>>;
}
const CompletedTasks: React.FC<myProps> = ({
  myTasks,
  completedTasks,
  setCompletedTask,
}) => {
  let tempoComp: myTaskArrMember[] = [];
  const viewport = window.visualViewport as VisualViewport;
  const lokaci = new Date();

  return (
    <div className="tasks">
      {completedTasks?.map((task) => {
        if (task.status != "deleted") {
          return (
            <>
              <div className="individualTask " key={task.creationDate}>
                <h3 className="title">{task.name}</h3>
                <span className="markAsCompleted">
                  <input
                    type="checkbox"
                    name="markAsCompleted"
                    id="markAsCompleted"
                    onClick={() => {
                      completedTasks?.map((anytask) => {
                        if (anytask.creationDate != task.creationDate) {
                          tempoComp.push(anytask);
                        } else {
                          myTasks.push(anytask);
                          console.log(anytask);
                          anytask.status = "deleted";
                          localStorage.setItem(
                            "completed",
                            `${JSON.stringify({
                              completedTasks,
                            })}`
                          );
                        }
                      });
                      setCompletedTask(tempoComp);
                      console.log("mu tempo: " + tempoComp);
                      console.log("my tasks: " + myTasks);
                      tempoComp = [];
                    }}
                  />
                  {viewport.width > 400 && (
                    <label htmlFor="markAsCompleted">Delete</label>
                  )}
                </span>
                <p className="description">{task.discription}</p>
                <div className="taskInfo">
                  <span className="status">{task.status}</span>
                  <span className="taskTime">{task.time}</span>
                  <span className="remainingTime">
                    {getTimeDefference(
                      "back",
                      lokaci,
                      `${task.date}T`,
                      `${task.time}`
                    )}
                  </span>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default CompletedTasks;
