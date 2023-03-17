// imports
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const BottomBarComponent = (props) => {
    const navigation = useNavigation()
    // data

    // methods
    function goToPage(name) {
        switch (name) {
            case 'home':
                navigation.navigate({
                    name: 'HomePage'
                })
                break;
            case 'category':
                navigation.navigate({
                    name: 'CategoryPage'
                })
                break;
            case 'saved':
                navigation.navigate({
                    name: 'SavedPage'
                })
                break;
            case 'account':
                navigation.navigate({
                    name: 'AccountPage'
                })
                break;
            default:
                console.log('default')
        }
    }

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => goToPage('home')} style={style.button}>
                <View>
                    <Image source={require('../../assets/home-line.png')} style={{ width: 22, height: 22 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => goToPage('category')} style={style.button}>
                <View>
                    <Image source={require('../../assets/category.png')} style={{ width: 22, height: 22 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => goToPage('saved')} style={style.button}>
                <View>
                    <Image source={require('../../assets/saved.png')} style={{ width: 22, height: 22 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => goToPage('account')} style={style.button}>
                <View>
                    <Image source={require('../../assets/account.png')} style={{ width: 22, height: 22 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    button: {
        width: 60,
        height: 60,
        shadowOpacity: 1,
        backgroundColor: 'white',
        shadowColor: "black",
        elevation: 3,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BottomBarComponent