// imports
import { View, Text, StyleSheet } from 'react-native'

// page
const SavedPage = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Saved page
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 20
    }
})

export default SavedPage