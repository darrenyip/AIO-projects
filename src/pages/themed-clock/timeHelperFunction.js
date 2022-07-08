function getTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    return {
        month,
        day,
        date,
        hours,
        hoursForClock,
        minutes,
        seconds,
        ampm,
    };
}

const initTime = {
    ampm: "AM",
    date: 1,
    day: 1,
    hours: 0,
    hoursForClock: 0,
    minutes: 0,
    month: 0,
    seconds: 0,
};
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export { months, days, initTime, getTime };