import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filme(props) {

const { Nome, Ano_de_lancamento, Diretor, Tipo, Duração, Imagem } = props



  return (

    <View style={styles.container}>


      <Text style = {styles.texto}>Filmes</Text>

      <Text style={styles.texto}>NOME: {Nome}</Text>
      <Text style={styles.texto}>ANO DE LANÇAMENTO: {Ano_de_lancamento}</Text>
      <Text style={styles.texto}>DIRETOR: {Diretor}</Text>
      <Text style={styles.texto}>TIPO: {Tipo}</Text>
      <Text style={styles.texto}>DURAÇÃO: {Duração}</Text>

      <Image
        source={{
            uri: Imagem
        }}
        style={{
            height:200,
            width:200
        }}
      
      
      />




    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 10,
        padding: 5,
        alignItems: 'center',
        flex: 1
      },
      texto: {
        fontSize: 20,
        fontWeight: 600
      }


})