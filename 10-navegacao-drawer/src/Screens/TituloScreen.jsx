import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


export default function TituloScreen({ navigation, route }) {

  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022]
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024]
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025]
    }
  ];



  return (
    <View style={styles.container}>
      <View style={{ height: "60%", }}>

        <FlatList
          style={styles.lista}
          data={titulos}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Anos: {item.anos.join(', ')}</Text>

            </View>
          )}
        />


      </View>

      <View style={{ paddingTop: 130 }} >

        <Button icon="camera"
          style={styles.botao}
          mode='outlined'
          onPress={() => navigation.openDrawer()}>
          Abrir Drawer
        </Button>






        <Button icon="camera"
          style={styles.botao}
          mode='outlined'
          onPress={() => {
            navigation.openDrawer()
            setTimeout(
              () => navigation.closeDrawer(),
              3000
            )
          }}>

          Abrir Drawer e Fechar
        </Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
    backgroundColor: 'gray',
    flex: 1,
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },

  lista: {
    backgroundColor: 'gray',
    height: "100%",
    borderRadius: 12,

  },
  botao: {
    backgroundColor: 'white',
    height: "50",
    borderRadius: 15,
    paddingTop: 6,
    marginTop: 10 , 



  }

});









