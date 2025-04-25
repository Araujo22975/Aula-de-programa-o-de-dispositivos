import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function FeedScreen({navigation, route}) {

console.log (route.params)

const receita =() => {
  
}


  return (
    <View>
     


      <Button
    mode='contained'
    onPress={() => navigation.navigate('HomeScreen')}
    >
Ir para Receitas
    </Button>



    <Button
    mode='contained'
    onPress={() => navigation.goBack('HomeScreen')}
    >
Voltar
    </Button>





    </View>
  )
}

const styles = StyleSheet.create({})