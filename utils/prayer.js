import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getCurrentDay, getCurrentDayPlusDaysAsObject, getCurrentMonth } from './date';
import { isEmpty } from 'lodash';

// Calculate next prayer
export const getNextPrayer = (times) => {

    dayjs.extend(customParseFormat);

    if (isEmpty(times)) {
        return undefined
    }

    // Gets timetable for current day
    const today = times[getCurrentMonth()][getCurrentDay()];

    // Place all jamaah times in an object 
    let jamaahTimes = {
        fajrJamaah: today.fajrJamaah,
        zuhrJamaah: today.zuhrJamaah,
        asrJamaah: today.asrJamaah,
        maghribJamaah: today.maghribJamaah,
        ishaJamaah: today.ishaJamaah
    }

    // Loop through to find time that is closest to current time
    for (const prayer in jamaahTimes) {
        if (prayer.endsWith('Jamaah')) {
            const jamaahTime = dayjs(today[prayer], 'hh:mm')
            if (dayjs().isBefore(jamaahTime)) {
                return { name: prayer, date: jamaahTime.toString() }
            }
        }
    }
}

export const getPrayerTimetable = timetable => {

    // Gets timetable for current day
    const today = timetable[getCurrentMonth()][getCurrentDay()];

    const tomorrowAsDayJS = getCurrentDayPlusDaysAsObject(1);
    const tomorrowsDay = Number(tomorrowAsDayJS.format('D')); // e.g: 10
    const tomorrowsMonth = tomorrowAsDayJS.format('MMMM'); // e.g: May

    const todaysDate = dayjs().format("MM/DD/YYYY");

    // Gets timetable for next day
    const tomorrow = timetable[tomorrowsMonth][tomorrowsDay];

    let prayerInfo = { ...today }

    for (const property in today) {
        if (property.includes("Begins") || property.includes("Jamaah")) {
            const jammahTime = dayjs(`${todaysDate} ${today[property]}`, "MM-DD-YYYY HH:mm");

            if (dayjs().isAfter(jammahTime)) {
            }
        }
    }

    return prayerInfo
}