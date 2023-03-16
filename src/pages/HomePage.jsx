// imports
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

const HomePage = ({navigation}) => {

    // methods
    function showMessage() {
        navigation.navigate('AboutPage')
    }

    return (
        <View style={style.container}>
            <Button
                title='Go to About Page'
                onPress={() => showMessage()}
            />
        </View>
    )
}

export default HomePage

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 40
    }
})