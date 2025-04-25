import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function posts({navigation, route}) {
  return (
    <View>
      <Text>posts</Text>
      <Text>posts</Text>
      <Text>posts</Text>
      <Text>posts</Text>
      <Text>posts</Text>
      <Text>posts</Text>

      <Button
    mode='contained'
    onPress={() => navigation.goBack('home')}
    >
Voltar
    </Button>


    </View>
  )
}

const styles = StyleSheet.create({})