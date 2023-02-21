import dayjs from 'dayjs';

// Returns current date Eg. October 18th 2022
export const getCurrentDate = dayjs().format("dddd D MMM, YYYY");