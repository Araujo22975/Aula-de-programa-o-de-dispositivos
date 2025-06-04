import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'


export default function MenuInicial() {

    

  return (
    <ScrollView>
      <View style={styles.container}>

        

        <Card style={{ margin: 10 }}>
          <Card.Content>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Sobre o Flamengo</Text>
            <Text></Text>
            <Text variant='bodyMedium' style={{ fontWeight: '500'}}>O Clube de Regatas do Flamengo, fundado em 17 de novembro de 1895 no Rio de Janeiro, é uma das instituições esportivas mais tradicionais e vitoriosas do Brasil. Inicialmente criado para competições de remo, o clube estabeleceu seu departamento de futebol em 1911, tornando-se um dos mais populares e bem-sucedidos do país.</Text>
            <Text></Text>
            <Text></Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/7f/85/b5/7f85b57bebe153223404911f7a88bcc5.jpg' }} style={{height: 450}}/>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Um título</Title>
            <Paragraph>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Um título</Title>
            <Paragraph>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>


      </View>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    alignItems: 'center',
    paddingTop: 10
  }
})

