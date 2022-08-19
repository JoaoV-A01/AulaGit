import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/home'
import Contato from './src/contato';
import Sobre from './src/sobre';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:'yellow',
          tabBarStyle:{
            backgroundColor: 'black'
          }
        }}
      >
        <Tab.Screen name = 'HOME' 
        component = {Home}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
        <Tab.Screen name = 'CONTATO' 
        component = {Contato}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="contact-page" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
        <Tab.Screen name = 'SOBRE' 
        component = {Sobre}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="info-with-circle" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
