import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MyTrips from '../screens/MyTrips';
import FindTrips from '../screens/FindTrips';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyTrips" component={MyTrips} />
        <Stack.Screen name="FindTrips" component={FindTrips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
