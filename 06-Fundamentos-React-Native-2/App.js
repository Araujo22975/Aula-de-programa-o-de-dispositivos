import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';



export default function App() {

const listaAtletas = {

  Nome: "Neymar",
  Idade: 33,
  Número: 10,
  Imagem: ''

},
{
  Nome:"Lebron James",
  Idade: 38,
  Número: 23,
  Imagem: ''
}






  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    
      <Atleta>



      </Atleta>




     


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
