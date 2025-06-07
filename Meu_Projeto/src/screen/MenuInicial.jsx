import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Text,} from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'



export default function MenuInicial({navigation, route}) {


  return (
    <ScrollView>
      <View style={styles.container}>

     
    

        <Card style={{backgroundColor: 'white'}}>
          <Card.Content>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Noticías do Flamengo</Text>
            <Text></Text>
            <Text></Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/ba/60/34/ba603458e4b3b15d82fdddf53cb95b95.jpg' }} style={{height: 400, width:390}}/>
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold'}}>Zenit avisa que vai pagar multa, e decisão de deixar o Flamengo está nas mãos de Gerson.</Text>
          <Text></Text>
            <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate('Noticias')}
        style={styles.button}
      >
        Ir para mais Noticias do Flamengo
      </Button>
       <Text></Text>
</Card>

        
        <Card style={{backgroundColor: 'white'}}>
          <Card.Content>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Venha fazer parte da Nação</Text>
            <Text></Text>
             <Text variant='bodyMedium' style={{ fontWeight: 'bold'}}>Venha fazer parte da maior nação do mundo, somos mais de 45 milhões de torcedores espalhados pelo o mundo.</Text>
          </Card.Content>
          <Text></Text>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/77/d6/ab/77d6abb47a4c0e4dd826fb561be4238b.jpg' }} style={{height: 400, width:390}}/>
          
          <Text></Text>
            <Button 
        mode="contained-tonal"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      >
        Cadastre-se agora 
     </Button>

     <Text></Text>
</Card>

<Card style={{backgroundColor: 'white'}}>
          <Card.Content>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Jogadores do Mengão</Text>
            <Text></Text>
            <Text></Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/a7/2b/f9/a72bf9fed62c62db01c1439f67f24ce8.jpg' }} style={{height: 400, width:390}}/>
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold'}}></Text>
          <Text></Text>
            <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate('Jogadores')}
        style={styles.button}
      >
        Ir para os jogadores do Flamengo
      </Button>
       <Text></Text>
</Card>



      </View>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    backgroundColor: 'red',
    alignItems: 'flex-start',
    paddingTop: 4
  }
})

