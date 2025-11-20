const NewTask = () => {
  return (
    <div className="formWrapper">
      <form>
        <label htmlFor="taskName">Task name</label>
        <input
          type="text"
          name="taskName"
          id="taskName"
          placeholder="what you are going to do ...."
          required
        />
        <label htmlFor="discription">Discription</label>
        <textarea name="taskDiscription" id="discription"></textarea>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" required />
        <label htmlFor="taskTime">Time</label>
        <input type="time" name="taskTime" id="taskTime" required />
      </form>
    </div>
  );
};

export default NewTask;
