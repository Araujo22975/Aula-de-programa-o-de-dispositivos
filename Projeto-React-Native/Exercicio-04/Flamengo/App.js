import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  const nome = "Flamengo"

  function alerta() {
    alert('Golll do Mengão!!!')
  }




  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25 }}>Reprodução</Text>
        <Text style={{ fontSize: 25 }}>{nome}</Text>
        <Text style={styles.textoGrande}>8 Brasileiros</Text>
        <Text style={styles.textoGrande}>5 Copas do Brasil</Text>
        <Text style={styles.textoGrande}>1 Mundial</Text>
        <Text style={styles.textoGrande}>3 Libertadores</Text>
        <Text style={styles.textoGrande}>39 Cariocas</Text>

        <Text style={styles.textoGrande}>Isso é Flamengo!!!</Text>

        <Button title='Melhor time do Brasil' onPress={alerta}></Button>

        <Image
          source={{
            uri: 'https://folhadoleste.com.br/wp-content/uploads/2025/03/Flamengo-x-Fluminense-Carioca-1024x551.jpg'
          }}
          style={{
            height: 225,
            width: 220
          }}
        ></Image>
        <Image
          source={require('./Imagens/informacoes.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        />

        <Image
          source={require('./Imagens/Flamengo.png')}
          style={{
            height: 225,
            width: 260
          }}

        />


        <Image
          source={require('./Imagens/Gabigol.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        />

        <Image
          source={require('./Imagens/Imagem.png')}
          style={{
            height: 225,
            width: 260
          }}

        />










      </View>



    </ScrollView>



  );
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});

