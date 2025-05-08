import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

export default function EscudoScreen() {

  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Maracanã",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"]
    };

  return (

    <View style={styles.container}>
    <Image source={{ uri: time.escudo }} style={styles.escudo} />
    <Text style={styles.nome}>{time.nome}</Text>
    <Text>Fundação: {time.fundacao}</Text>
    <Text>Estádio: {time.estadio}</Text>
    <Text>Mascote: {time.mascote}</Text>
    <Text>Cores: {time.cores.join(' e ')}</Text>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 20,
  alignItems: 'center',
  backgroundColor: '#fff',
},
escudo: {
  width: 100,
  height: 100,
  marginBottom: 20,
},
nome: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},
});
 