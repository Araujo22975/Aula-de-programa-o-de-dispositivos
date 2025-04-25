import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import home from '../Screens/home'
import feed from '../Screens/feed'
import posts from '../Screens/posts'


const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>


<Stack.Screen name='home' component={home} />
<Stack.Screen name='feed' component={feed} />
<Stack.Screen name='posts' component={posts} />

    </Stack.Navigator>
  )
}

