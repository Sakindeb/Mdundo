import LoginPage from "./components/pages/SIGN/LoginPage";
import CreateUser from "./components/pages/REST/createUser";
import ReadUser from "./components/pages/REST/readUser";
import Dashboard from "./components/pages/Dashboard";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListUsers from "./components/pages/REST/listUsers";
import UpdateUser from "./components/pages/REST/updateUser";
import Continents from "./components/pages/Continents";
import * as Font from 'expo-font';
import {Image} from "react-native";

const Stack = createStackNavigator();
const iconColor = "#46A637";
const primaryColor = "#212340";

async function loadFonts() {
    await Font.loadAsync({
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      // Add more styles if necessary
    });
  }
  
loadFonts();

const navTheme = {
  dark: false,
  colors: {
    primary: 'blue',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'gray',
    notification: 'red',
  },
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function LogoTitle() {
  return (
    <Image
      style={{ width: 150, height: 50 }}
      source={require('./assets/logo.png')}
    />
  );
}

export default function App() {  
  return (
    <NavigationContainer theme={navTheme} screenOptions={screenOptions}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}  
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}/>
          <Stack.Screen name="Zamara" component={Dashboard}  
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: primaryColor, color: "white" },
            headerTintColor: "#fff",
          }}/>
          <Stack.Screen name="CreateStaff" component={CreateUser}
          options={{
            title: 'New Staff',
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }} />
          <Stack.Screen name="ListStaff" component={ListUsers} 
          options={{
            title: 'Staff',
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}/>
          <Stack.Screen name="ReadStaff" component={ReadUser} 
          options={{
            title: 'Staff Details',
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}/>
          <Stack.Screen name="UpdateStaff" component={UpdateUser} 
          options={{
            title: 'Update Staff',
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}/>
          <Stack.Screen name="Continents" component={Continents} 
          options={{
            title: 'Continents',
            headerStyle: { backgroundColor: primaryColor },
            headerTintColor: "#fff",
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
