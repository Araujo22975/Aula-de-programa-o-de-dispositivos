import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Text, Card, Title, Paragraph } from 'react-native-paper'


export default function JogadoresScreen() {
  return (
    <ScrollView>

<View style={styles.container}>

<Text variant='headlineSmall' style={{ fontWeight: 'bold', color: 'white' }}>Times</Text>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Idolo do Palmeiras</Title>
<Paragraph>Ademir da Guia</Paragraph>
<Paragraph>Ademir da Guia vestiu a camisa do Palmeiras em 901 partidas, com uma campanha de 509 vitórias, 234 empates e 158 derrotas. Ele foi o terceiro jogador que mais marcou gols pelo clube, com 153. Já quanto às conquistas, foram 2 Campeonatos Brasileiros, 1 Taça Brasil, 1 Rio-São Paulo e também 5 títulos estaduais.</Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 480}} source={{ uri: 'https://i.pinimg.com/236x/93/85/19/9385197eee3d25219ae85687505c698b.jpg'}} />
</Card>


<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Idolo do São Paulo</Title>
<Paragraph>Rogério Ceni </Paragraph>
<Paragraph>Revelado em 1990 pelo Sinop, do Mato Grosso, foi contratado no mesmo ano pelo São Paulo, equipe da qual foi titular de 1997 até 2015 e é considerado o maior e melhor jogador da história do clube, por ter conquistado praticamente todos os títulos possíveis, sendo em muitos deles decisivo.</Paragraph>
</Card.Content>
<Card.Cover  style={{width:'100%', height: 620}} source={{ uri: 'https://i.pinimg.com/236x/d8/5b/67/d85b67e7cd0a78b876d112d8a6ff1fa8.jpg'}} />
</Card>


<Card style={{ margin :'10'}}>
<Card.Content>
<Title>Idolo do Flamengo</Title>
<Paragraph>Zico</Paragraph>
<Paragraph>Zico é considerado o maior ídolo do Flamengo. Ele jogou no clube por 35 anos e conquistou títulos memoráveis, como a Libertadores e o Mundial de 1981. </Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%', height: 300}} source={{ uri: 'https://i.pinimg.com/236x/c1/e4/59/c1e4590fda99d39d23c5f80325a080e6.jpg'}} />
</Card>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Idolo do Santos</Title>
<Paragraph>Pelé</Paragraph>
<Paragraph>O Rei do Futebol atuou durante quase toda sua carreira no Santos, entre 1956 a 1974. No período, ele levou o clube a conquistar dez títulos estaduais e seis campeonatos nacionais (Taça Brasil e Torneio Robertão), além de duas Copas Libertadores e dois Mundiais de Clubes, em 1962 e 1963.</Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 420}} source={{ uri: 'https://i.pinimg.com/236x/a3/63/58/a3635889832a9ee1c54d7322787b7d83.jpg'}} />
</Card>

<Card style={{ margin :'20'}}>
<Card.Content>
<Title>Idolo do Corinthians</Title>
<Paragraph>Cássio</Paragraph>
<Paragraph>O “gigante” ocupa a primeira posição do ranking. Cássio defendeu o Corinthians de 2012 até 2024, sendo multicampeão pelo clube. Nove títulos ganhos. Cássio foi peça fundamental para as inesquecíveis conquistas da Libertadores e do Mundial de Clubes de 2012.</Paragraph>
</Card.Content>
<Card.Cover style={{width:'100%' , height: 500}} source={{ uri: 'https://i.pinimg.com/474x/49/8b/3a/498b3ac42d968a8c922768cb0d60aeed.jpg'}} />
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