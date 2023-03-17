// imports
import { StyleSheet, Text, SafeAreaView, ScrollView, RefreshControl, View, Alert } from 'react-native'
import { useState } from 'react'

const HomePage = ({ navigation }) => {

    // data
    const [refreshing, changeRefresh] = useState(false)

    // methods

    function showUpdate() {
        changeRefresh(true)
        setTimeout(() => {
            Alert.alert('You have updated')
            changeRefresh(false)
        }, 1000)
    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => showUpdate()} />} style={style.view}>
                <View>
                    <Text style={style.text}>
                        Home page
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 20
    }
})