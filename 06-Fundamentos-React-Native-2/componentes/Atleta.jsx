import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Atleta(props) {

  const { nome, idade, numero, imagem } = props







  return (
    <View style={styles.container}>


      <Text style={styles.texto}>Atleta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderWidth: 10,
    padding: 5
  },
  texto: {
    fontSize: 20,
    fontWeight: 600
  }
})