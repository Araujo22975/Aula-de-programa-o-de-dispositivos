import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FeedScreen from '../screens/FeedScreen'
import HomeScreen from "../screens/HomeScreen"

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>


<Stack.Screen name='HomeScreen' component={HomeScreen} />
<Stack.Screen name='FeedScreen' component={FeedScreen} />


    </Stack.Navigator>
  )
}