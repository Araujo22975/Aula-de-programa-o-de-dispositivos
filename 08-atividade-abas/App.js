import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from './Screens/EscudoScreen';
import TituloScreen from './Screens/TituloScreen';
import JogadoresScreen from './Screens/JogadoresScreen';

const Tab = createBottomTabNavigator()




export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>
    <Tab.Navigator>

<Tab.Screen 

name='EscudoScreen'
component={EscudoScreen}
options={{
  title: 'Escudos',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'blue'
  },
  tabBarIcon: ({color, size}) => <Ionicons name='football' color={color} size={size} />


}}
/>

<Tab.Screen 

name='TituloScreen'
component={TituloScreen}
options={{
  title: 'Titulo',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'blue'
  },
  tabBarIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size} />


}}
/>

<Tab.Screen 

name='JogadoresScreen'
component={JogadoresScreen}
options={{
  title: 'Jogadores',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'blue'
  },
  tabBarIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />


}}
/>











    </Tab.Navigator>
    </NavigationContainer>
   </PaperProvider>

  );
}


