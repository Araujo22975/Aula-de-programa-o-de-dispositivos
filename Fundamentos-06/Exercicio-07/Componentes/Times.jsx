import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'
import Jogador from './Jogador'

export default function Times(props) {

    const { nome, anoFundacao, mascote, imagem, jogadores } = props

  return (

    <Card style={{ margin: 10 }}>
    <Card.Title title={nome} subtitle={anoFundacao} />
    <Card.Content>
      <Text>Descrição: {mascote}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: imagem }} />
    <Card.Actions>
    </Card.Actions>
  </Card>
)
}



   
  


const styles = StyleSheet.create({})