import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'
import { DataTable } from 'react-native-paper';

const PrayerTable = () => {

    return (
        <DataTable>
            <DataTable.Header style={styles.container}>
                <DataTable.Title>Salah</DataTable.Title>
                <DataTable.Title>Begins</DataTable.Title>
                <DataTable.Title>Iqamah</DataTable.Title>
            </DataTable.Header>
        </DataTable>
    )
}

export default PrayerTable

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottomWidth: 0,
        color: 'white'
    }
})

