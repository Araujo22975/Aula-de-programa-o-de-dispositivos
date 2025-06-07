import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const jogadoresFlamengo = [
  {
    id: '1',
    nome: 'Pedro',
    posicao: 'Atacante',
    numero: 9,
    imagem: 'https://i.pinimg.com/736x/f9/29/1b/f9291b5c9b99de0eb131c574a5110cb1.jpg' 
  },
  {
    id: '2',
    nome: 'Arrascaeta',
    posicao: 'Meia',
    numero: 14,
    imagem: 'https://i.pinimg.com/736x/9b/0a/b8/9b0ab84d4fbc36fb49d730f0517e0991.jpg'
  },
  {
    id: '3',
    nome: ' De La Cruz',
    posicao: 'Meia',
    numero: 18,
    imagem: 'https://i.pinimg.com/736x/03/15/ac/0315ac7c3704dc26b97711affdf83cea.jpg'
  },
  {
    id: '4',
    nome: 'Gerson',
    posicao: 'Meia',
    numero: 8,
    imagem: 'https://i.pinimg.com/736x/d5/dc/c0/d5dcc02bf2543cfcaa18b58507278b7d.jpg'
  },
  {
    id: '5',
    nome: 'Bruno Henrique',
    posicao: 'Atacante',
    numero: 27,
    idade: 34,
    imagem: 'https://i.pinimg.com/736x/24/f7/5d/24f75d5896eb7ae87625ca14831cd588.jpg'
  },
  {
    id: '6',
    nome: 'Léo Ortiz',
    posicao: 'Zaqueiro',
    numero: 3,
    imagem: 'https://i.pinimg.com/736x/8d/a1/53/8da15372f0d0b4a774830b212d1d852b.jpg'
  },
  {
    id: '7',
    nome: 'Léo Pereira',
    posicao: 'Zaqueiro',
    numero: 4,
    imagem: 'https://i.pinimg.com/736x/6d/38/b0/6d38b071b17a878f0e0fa3279ccbfe66.jpg'
  },
  {
    id: '8',
    nome: 'Rossi',
    posicao: 'Goleiro',
    numero: 1,
    imagem: 'https://i.pinimg.com/736x/c8/24/81/c8248193524a3f85861d36c2ac3de5c0.jpg'
  },
  {
  id: '9',
    nome: 'Wesley',
    posicao: 'Lateral',
    numero: 43,
    imagem: 'https://i.pinimg.com/736x/8b/3b/e0/8b3be08fd5b8eddc9475c412ce52953f.jpg'
  },
{
  id: '10',
    nome: 'Alex Sandro',
    posicao: 'Lateral',
    numero: 26,
    imagem: 'https://i.pinimg.com/736x/76/ad/7e/76ad7ec801e020773e4127162e7c7b7e.jpg'
  },





];


const Item = ({ nome, posicao, numero, imagem }) => (
  <View style={styles.item}>
    <Image source={{ uri: imagem }} style={styles.foto} />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.detalhes}>Posição: {posicao}</Text>
      <Text style={styles.detalhes}>Número: {numero}</Text>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item 
      nome={item.nome} 
      posicao={item.posicao} 
      numero={item.numero}
      imagem={item.imagem}

    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Elenco do Flamengo</Text>
      <FlatList
        data={jogadoresFlamengo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Button
              mode="contained-tonal"
              onPress={() => navigation.navigate('')}
              style={styles.button}
            >
              Ir para os jogadores do Flamengo
            </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#cc0000', 
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  foto: {
    width: 200,
    height: 400,
    borderRadius: 40,
    marginRight: 15,
  },
  info: {
    justifyContent: 'center',
  },
  nome: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  detalhes: {
    fontSize: 10,
    color: 'black',
  },
});

export default App;



