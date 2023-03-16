// imports
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// stack
const Stack = createNativeStackNavigator()

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

const RouterView = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='HomePage' options={{title:"Bosh sahifa"}} component={HomePage}/>
                <Stack.Screen name='AboutPage' options={{title:"About Page", headerShown: false}} component={AboutPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterView