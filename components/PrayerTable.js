import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const PrayerTable = () => {

    return (
        <View style={styles.table}>
            <View style={styles.rowHeading}>
                <Text style={styles.salahHeading}>Salah</Text>
                <Text style={styles.beginsHeading}>Begins</Text>
                <Text style={styles.iqamahHeading}>Iqamah</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.pName}>Fajr</Text>
                <Text style={styles.begins}>4:40</Text>
                <View style={styles.whiteBG}>
                    <Text style={styles.iqamah}>4:45</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.pName}>Zuhr</Text>
                <Text style={styles.begins}>1:00</Text>
                <View style={styles.whiteBG}>
                    <Text style={styles.iqamah}>1:30</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.pName}>Asr</Text>
                <Text style={styles.begins}>3:00</Text>
                <View style={styles.whiteBG}>
                    <Text style={styles.iqamah}>3:30</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.pName}>Maghrib</Text>
                <Text style={styles.begins}>6:00</Text>
                <View style={styles.whiteBG}>
                    <Text style={styles.iqamah}>7:30</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.pName}>Isha</Text>
                <Text style={styles.begins}>9:00</Text>
                <View style={styles.whiteBG}>
                    <Text style={styles.iqamah}>9:30</Text>
                </View>
            </View>
        </View>
    )
}

export default PrayerTable

const styles = StyleSheet.create({
    table: {
        justifyContent: 'space-around',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 450,
        marginTop: 50
    },
    rowHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    salahHeading: {
        color: COLORS.white,
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        flex: 1
    },
    beginsHeading: {
        color: COLORS.white,
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        flex: 0.65
    },
    iqamahHeading: {
        color: COLORS.white,
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        flex: 0.55,
        marginLeft: 22
    },
    row: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: '10px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10
    },
    pName: {
        flex: 1,
        color: COLORS.white,
        fontFamily: 'Poppins_300Light',
        fontSize: 18,
        textAlign: 'left',
    },
    begins: {
        flex: 0.7,
        fontFamily: 'Poppins_700Bold',
        color: COLORS.white,
        fontSize: 20,
    },
    whiteBG: {
        backgroundColor: '#fff',
        flex: 0.5,
        borderRadius: 10
    },
    iqamah: {
        paddingVertical: 5,
        fontFamily: 'Poppins_700Bold',
        color: '#104022',
        textAlign: 'center',
        fontSize: 20
    }
})

