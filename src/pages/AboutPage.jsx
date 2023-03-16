// imports
import { View, Text, StyleSheet } from 'react-native'

const AboutPage = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                This is AboutPage
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 20
    }
})

export default AboutPage