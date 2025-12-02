const getTimeDefference = (
  facing: string,
  currentDate: Date,
  futureDate: string,
  futureTime: string
) => {
  let dateDiff: number;
  let timeReference: string;
  if (facing == "feature") {
    dateDiff =
      new Date(`${futureDate + futureTime}`).getTime() - currentDate.getTime();
    timeReference = "remaining";
  } else {
    dateDiff =
      currentDate.getTime() - new Date(`${futureDate + futureTime}`).getTime();
    timeReference = "ago";
  }
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
      return Math.floor(days) + " days " + timeReference;
    }
    return Math.floor(days) + " day " + timeReference;
  } else if (Math.floor(hours) > 0) {
    if (Math.floor(hours) > 1) {
      return Math.floor(hours) + " hours " + timeReference;
    }
    return Math.floor(hours) + " hour " + timeReference;
  } else if (Math.floor(minutes) > 0) {
    if (Math.floor(minutes) > 1) {
      return Math.floor(minutes) + " Minutes " + timeReference;
    }

    return Math.floor(minutes) + " minute " + timeReference;
  } else if (Math.floor(seconds) > 0) {
    if (Math.floor(seconds) > 1) {
      return Math.floor(seconds) + " seconds " + timeReference;
    }
    return Math.floor(seconds) + " second  " + timeReference;
  } else {
    return "Time's up";
  }
};
export default getTimeDefference;
