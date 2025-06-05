import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'
import { Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


export default function MenuInicial({navigation, route}) {

    

  return (
    <ScrollView>
      <View style={styles.container}>

     
    

        <Card style={{backgroundColor: 'white'}}>
          <Card.Content>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Sobre o Flamengo</Text>
            <Text></Text>
            <Text></Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/70/e1/69/70e169d8c859435c024af16214d6a5cc.jpg' }} style={{height: 450, width:400}}/>
          
        </Card>

        


      </View>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 10,
  }
})

