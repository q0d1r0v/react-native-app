// imports
import { View, Text, StyleSheet } from 'react-native'

const AccountPage = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                About page
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20
    }
})

export default AccountPage