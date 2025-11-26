interface myTaskArrMember {
  name: string;
  date: string;
  time: string;

  creationDate: Date;
  discription?: string;
}
interface myProps {
  myTasks: myTaskArrMember[];
}

const Tasks: React.FC<myProps> = ({ myTasks }) => {
  const lokaci = new Date();
  const getTimeDefference = (
    currentDate: Date,
    futureDate: string,
    futureTime: string
  ) => {
    const dateDiff =
      new Date(`${futureDate + futureTime}`).getTime() - currentDate.getTime();
    const totalSeconds = Math.floor(dateDiff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    console.log(
      `Difference is ${Math.floor(days)} days, ${Math.floor(
        hours % 24
      )} hours, ${Math.floor(minutes % 60)} minutes, ${Math.floor(
        seconds % 60
      )} seconds`
    );
    if (Math.floor(days) > 0) {
      if (Math.floor(days) > 1) {
        return Math.floor(days) + " days remaining";
      }
      return Math.floor(days) + " day remaining";
    } else if (Math.floor(hours) > 0) {
      if (Math.floor(hours) > 1) {
        return Math.floor(hours) + " hours remaining";
      }
      return Math.floor(hours) + " hour remaining";
    } else if (Math.floor(minutes) > 0) {
      if (Math.floor(minutes) > 1) {
        return Math.floor(minutes) + " Minutes remaining";
      }

      return Math.floor(minutes) + " minute remaining";
    } else if (Math.floor(seconds) > 0) {
      if (Math.floor(seconds) > 1) {
        return Math.floor(seconds) + " seconds remaining";
      }
      return Math.floor(seconds) + " second  remaining";
    } else {
      return "Time's up";
    }
  };
  new Date();
  const viewport = window.visualViewport as VisualViewport;
  //   const yanzuforCalc = lokaci.getTime();
  console.log(viewport.width);
  myTasks.map((task) => console.log(task.name));

  return (
    <div className="tasks">
      {myTasks?.map((task) => {
        return (
          <>
            <div className="individualTask " key={task.creationDate.getTime()}>
              <h3 className="title">{task.name}</h3>
              <span className="markAsCompleted">
                <input
                  type="checkbox"
                  name="markAsCompleted"
                  id="markAsCompleted"
                />
                {viewport.width > 400 && (
                  <label htmlFor="markAsCompleted">Mark as completed</label>
                )}
              </span>
              <p className="description">{task.discription}</p>
              <div className="taskInfo">
                <span className="status">To be done</span>
                <span className="taskTime">{task.time}</span>
                <span className="remainingTime">
                  {getTimeDefference(lokaci, `${task.date}T`, `${task.time}`)}
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Tasks;
