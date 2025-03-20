//Imports dos componentes e libs
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, } from 'react-native';

//Função principal do componente
export default function App() {
//Lógica do meu componente
const nome = "Alex"


function alerta() {
alert('Clicou no botão!!!')
}







  return (
<ScrollView>

<View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ fontSize: 25}}>Reprodução</Text> 
      <Text style={{ fontSize: 25}}>{nome}</Text> 
      <Text style={styles.textoGrande}>Reprodução</Text>
      <Text style={styles.textoGrande}>Reprodução</Text>
      <Text style={styles.textoGrande}>Reprodução</Text>
      <Text style={styles.textoGrande}>Reprodução</Text>
      <Text style={styles.textoGrande}>Reprodução</Text>

      <Text  style={styles.textoGrande}>Teste de Dispositivo móvel</Text>
      
      <Button title='Avançar' onPress={alerta}></Button>

      <Image 
      source={{
        uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/03/flamengo-trofeu-carioca-2025-e1742162182357.jpg?w=420&h=240&crop=1&quality5'
      }}
      style={{
        height: 225,
        width: 220
      }}
/>
      <Image 
      source={require('./imagens/download.png')}
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
    fontStyle:'italic'
  }
});
