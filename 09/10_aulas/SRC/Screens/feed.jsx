import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function feed({navigation, route}) {



  return (
    <View>
      <Text>feed</Text>
      <Text>feed</Text>
      <Text>feed</Text>
      <Text>feed</Text>
      <Text>feed</Text>
      <Text>feed</Text>
      <Text>feed</Text>


      <Button
    mode='contained'
    onPress={() => navigation.navigate('posts')}
    >
Ir para posts
    </Button>



    <Button
    mode='contained'
    onPress={() => navigation.goBack('feed')}
    >
Voltar
    </Button>





    </View>
  )
}

const styles = StyleSheet.create({})