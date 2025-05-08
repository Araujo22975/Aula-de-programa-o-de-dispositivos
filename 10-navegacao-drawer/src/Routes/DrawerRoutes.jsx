import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import TituloScreen from '../Screens/TituloScreen'
import ProfileScreen from '../Screens/JogadoresScreen'
import JogadoresScreen from '../Screens/JogadoresScreen'
import EscudoScreen from '../Screens/EscudoScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>


<Drawer.Screen
    name='TituloScreen'
component={TituloScreen}
options={{
    title: "Titulo",
    drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size} />
}}

/>

<Drawer.Screen
    name='JogadoresScreen'
component={JogadoresScreen}
options={{
    title: "Jogadores",
    drawerIcon: ({color, size}) => <Ionicons name='person-circle' color={color} size={size} />
}}

/>



<Drawer.Screen
    name='EscudoScreen'
component={EscudoScreen}
options={{
    title: "Escudo",
    drawerIcon: ({color, size}) => <Ionicons name='flag' color={color} size={size} />
}}

/>

    </Drawer.Navigator>


  )
}
