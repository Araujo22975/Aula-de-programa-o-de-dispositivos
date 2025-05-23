import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Avatar, Card, Divider, Text, IconButton } from 'react-native-paper'


export default function HomeScreen({ navigation, route }) {
  const [categorias, setCategorias] = useState([]);
  

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Erro ao carregar categorias', err));
  }, []);

  

  return (
    <View style={styles.container}>

      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 5 }}
            onPress={() => navigation.navigate('ProdutosScreen', item)}
          >
            <Card.Title
              title={item}
              right={(props) => <IconButton {...props} icon="arrow-right"/>}
              
            />
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
