import dayjs from 'dayjs';

// Returns current date Eg. October 18th 2022
export const getCurrentDate = dayjs().format("dddd D MMMM YYYY");

// Returns current month Eg. April
export const getCurrentMonth = () => dayjs().format('MMMM')

// Returns current date in month Eg. 8
export const getCurrentDay = () => dayjs().format('D');

// Returns date after requested days from current date Eg. 28/04/2023 -> 30/04/2023
export const getCurrentDayPlusDaysAsObject = (days) => dayjs().add(days, 'days');
