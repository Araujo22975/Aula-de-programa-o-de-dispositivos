import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import MenuInicial from './src/screen/MenuInicial'
import Usuario from './src/screen/Usuario'
import Jogadores from './src/screen/Jogadores'
import Cadastro from './src/screen/Cadastro'
import Noticias from './src/screen/Noticias'




const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name='Menu Inical'
            component={MenuInicial}
            options={{
              title: 'Tela de Início',
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
            }}
          />

          

          <Tab.Screen
            name='Cadastro'
            component={Cadastro}
            options={{
              title: 'Cadastra-se na nação',
              tabBarIcon: ({ color, size }) => <Ionicons name='log-in' color={color} size={size} />
            }}
            />
<Tab.Screen
            name='Noticias'
            component={Noticias}
            options={{
              title: 'Noticias',
              tabBarIcon: ({ color, size }) => <Ionicons name='laptop' color={color} size={size} />
            }}
            />
<Tab.Screen
            name='Jogadores'
            component={Jogadores}
            options={{
              title: 'Jogadores do Flamengo',
              tabBarIcon: ({ color, size }) => <Ionicons name='information-outline' color={color} size={size} />
            }}
            />
<Tab.Screen
            name='Usuario'
            component={Usuario}
            options={{
              title: 'Perfil',
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}