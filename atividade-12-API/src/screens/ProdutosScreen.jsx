import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Avatar, Card, Divider, Text } from 'react-native-paper'

export default function ProdutosScreen({ navigation, route }) {

  const categoria = route.params
  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/' + categoria)
      .then(resposta => {
        console.log(resposta.data.products)
        setProdutos(resposta.data.products)
      })
      .catch(erro => alert('Ocorreu um erro ao buscar produto'))


  }, [])



  return (
    <View style={styles.container}>

      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 5 }}
            onPress={() => navigation.navigate('ProdutosScreen', item.id)}
          >


            <Card.Content>
              <Card.Cover source={{ uri: item.thumbnail }} />
              <Text>Nome: {item.title}</Text>
              <Text>Marca: {item.brand}</Text>
              <Text>Preço: {item.price}</Text>

            </Card.Content>

          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>

            <Text variant='titleLarge'>Aguarde...</Text>
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50
  },
  loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
  }
})