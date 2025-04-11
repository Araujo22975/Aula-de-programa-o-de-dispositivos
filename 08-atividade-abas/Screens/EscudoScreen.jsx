import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Text, Card, Title, Paragraph } from 'react-native-paper'

export default function EscudoScreen() {
  return (

<ScrollView>

<View style={styles.container}>

<Text variant='headlineSmall' style={{ fontWeight: 'bold', color: 'white' }}>Times</Text>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Palmeiras</Title>
<Paragraph>O escudo do Palmeiras foi criado em 1914, juntamente com a fundação do clube, que na época se chamava Palestra Itália.</Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/474x/96/a4/6d/96a46d845af876f648963f99df451e82.jpg'}} />
</Card>


<Card style={{ margin :'20'}}>
<Card.Content>
<Title>São Paulo</Title>
<Paragraph>O escudo do São Paulo Futebol Clube foi criado em 26 de janeiro de 1930, poucos dias após a fundação do clube. O desenho foi feito pelo estilista alemão Walter Ostrich, com a colaboração de Firmiano de Morais Pinto Filho, um dos fundadores do clube. </Paragraph>
</Card.Content>
<Card.Cover  style={{width:'100%', height: 300}} source={{ uri: 'https://i.pinimg.com/736x/39/9a/90/399a9099b5b825ced1b5e09daa72e270.jpg'}} />
</Card>


<Card style={{ margin :'10'}}>
<Card.Content>
<Title>Flamengo</Title>
<Paragraph>O escudo do Flamengo surgiu em 1895, com a fundação do Clube de Regatas.</Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%', height: 300}} source={{ uri: 'https://i.pinimg.com/236x/cb/1a/86/cb1a867789f74c597f41365f60488c6e.jpg'}} />
</Card>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Santos</Title>
<Paragraph>O escudo do Santos Futebol Clube foi criado em 1925. Antes disso, o clube não usava distintivo nas camisas, exceto em 1915. </Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/236x/71/cd/83/71cd8367479d2f2ca45f1eb9b51b90ad.jpg'}} />
</Card>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Corinthians</Title>
<Paragraph>O primeiro escudo do Corinthians foi criado em 1913, para um jogo contra o Minas Gerais, na Liga Paulista. O escudo era formado pelas letras "C" e "P", entrelaçadas, que significavam Corinthians Paulista. </Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/474x/7e/12/bd/7e12bd2ad6059568c7667d81bdf4b534.jpg'}} />
</Card>




</View>

</ScrollView>



  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'black',
  flex: 1,
  alignItems: 'center',
  paddingTop: 10
  }
  
  
  })

