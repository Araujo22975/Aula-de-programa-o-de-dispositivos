import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function home({navigation, route}) {

  console.log('navigation =>', navigation)
  console.log('route =>', route)

  return (
    <View>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>
      <Text>home</Text>

<Button
  mode='contained'
  onPress={() => navigation.navigate('feed' , {id: 1, nome: "Pedro"})}
>
  
  Ir para a Feed</Button>

    </View>
  )
}

const styles = StyleSheet.create({})