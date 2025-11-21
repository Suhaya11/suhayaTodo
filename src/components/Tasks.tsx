const Tasks = () => {
  const lokaci = new Date();
  const viewport = window.visualViewport as VisualViewport;
  //   const yanzuforCalc = lokaci.getTime();
  console.log(viewport.width);
  return (
    <div className="tasks">
      <div className="individualTask">
        <h3 className="title">Going to schoole</h3>
        <span className="markAsCompleted">
          <input type="checkbox" name="markAsCompleted" id="markAsCompleted" />
          {viewport.width > 400 && (
            <label htmlFor="markAsCompleted">Mark as completed</label>
          )}
        </span>
        <p className="description">
          I'm going to schoole to Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam, dolorum.
        </p>
        <div className="taskInfo">
          <span className="status">To be done</span>
          <span className="taskTime">{`${lokaci.getHours()} : ${lokaci.getMinutes()}:${lokaci.getMinutes()}`}</span>
          <span className="remainingTime">20 mins remains</span>
        </div>
      </div>{" "}
      <div className="individualTask">
        <h3 className="title">Going to schoole</h3>
        <span className="markAsCompleted">
          <input type="checkbox" name="markAsCompleted" id="markAsCompleted" />
          {viewport.width > 500 && (
            <label htmlFor="markAsCompleted">Mark as completed</label>
          )}
        </span>
        <p className="description">
          I'm going to schoole to Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam, dolorum.
        </p>
        <div className="taskInfo">
          <span className="status">To be done</span>
          <span className="taskTime">{`${lokaci.getHours()} : ${lokaci.getMinutes()}:${lokaci.getMinutes()}`}</span>
          <span className="remainingTime">20 mins remains</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default Tasks;
