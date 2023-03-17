// imports
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// components
import BottomBarComponent from '../components/BottomBarComponent'

// stack
const Stack = createNativeStackNavigator()

// pages
import HomePage from '../pages/HomePage'
import AccountPage from '../pages/AccountPage'
import CategoryPage from '../pages/CategoryPage'
import SavedPage from '../pages/SavedPage'

const RouterView = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='HomePage' options={{title:"Bosh sahifa"}} component={HomePage}/>
                <Stack.Screen name='CategoryPage' options={{title:"Category Page"}} component={CategoryPage}/>
                <Stack.Screen name='SavedPage' options={{title:"Saved Page"}} component={SavedPage}/>
                <Stack.Screen name='AccountPage' options={{title:"Account Page"}} component={AccountPage}/>
            </Stack.Navigator>
            <BottomBarComponent/>
        </NavigationContainer>
    )
}

export default RouterView