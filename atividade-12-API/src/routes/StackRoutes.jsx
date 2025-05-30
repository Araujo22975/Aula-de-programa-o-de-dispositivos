import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import ProdutosScreen from '../screens/ProdutosScreen'
import ProdutoScreens from '../screens/ProdutoScreens'



const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Categorias",
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='ProdutosScreen'
        component={ProdutosScreen}
        options={{
          title: "Produtos",
          headerTitleAlign: 'center'
        }}
      />

<Stack.Screen
        name='ProdutoScreen'
        component={ProdutoScreens}
        options={{
          title: "Detalhes",
          headerTitleAlign: 'center'
        }}
      />

    </Stack.Navigator>
  )
}
