export const formData = {
  getYears: () => {
    const currentDate = new Date().getFullYear(); //current year
    let years = [currentDate];
    for (let i = 1; i < 100; i++) {
      years.push(currentDate - i); //adds 99 prior years to years array
    }
    return years;
  },
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
