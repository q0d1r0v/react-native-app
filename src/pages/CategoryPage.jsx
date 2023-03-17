// imports
import {View, Text, StyleSheet} from 'react-native'

// page
const CategoryPage = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Category page
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

export default CategoryPage