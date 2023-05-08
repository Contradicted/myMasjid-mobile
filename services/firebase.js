import { child, get, ref } from "firebase/database"
import { db } from "../utils/firebase"

// Fetches Prayer Time info from realtime database
export const getPrayerTimetable = () => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db);
        get(child(dbRef, `timetable`)).then((snapshot) => {
            if (!snapshot.exists()) {
                reject('Not found')
            }
            resolve(snapshot.val())
        })
    })
}