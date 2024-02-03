import { getDaysInMonth } from "date-fns";
import intervalToDuration from "date-fns/intervalToDuration";

//Made to cycle days in the state with the asteroid data so we dont need to make more api calls
//After making it I've realized that asteroids for just one day are more than plenty of rendered components
//

//Given two "YYYY-MM-dd" dates it returns an array of days between start and end respectively inclusive
const cycleDays = (startdate, enddate) => {
  let count = 1;

  //If there is no specified end date return just the start date
  if (!enddate || enddate === "none") {
    return [`${startdate}`];
    //if end date is specified
  } else {
    const returnArr = [];
    const year = parseInt(startdate.split("-")[0]);
    const startMonth = parseInt(startdate.split("-")[1]);
    const endMonth = parseInt(enddate.split("-")[1]);

    const startdateDay = parseInt(startdate.split("-")[2]);
    const enddateDay = parseInt(enddate.split("-")[2]);

    const difference = intervalToDuration({
      start: new Date(startdate),
      end: new Date(enddate),
    });
    //If it's overflowing to the next month
    if (startMonth !== endMonth) {
      const daysInMonth = getDaysInMonth(
        new Date(`${year}`, `${startMonth - 1}`)
      );
      //Use day difference as a limit
      for (let i = 0; i < difference.days + 1; i++) {
        //if the current day no. is bigger than the
        //no. of days the month has
        if (startdateDay + i <= daysInMonth) {
          returnArr.push(`${year}-${startMonth}-${startdateDay + i}`);
        } else {
          returnArr.push(`${year}-${endMonth}-0${count}`);
          count++;
        }
      }
      return returnArr;
    }

    for (let i = 0; i < difference.days + 1; i++) {
      returnArr.push(`${year}-${startMonth}-${startdateDay + i}`);
    }

    return returnArr;
  }
};

export default cycleDays;
