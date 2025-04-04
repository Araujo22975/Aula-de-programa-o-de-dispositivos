import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider } from 'react-native-paper';




export default function App() {

  const listaCard = [
{
    Titulo: "Card",
    Descricao: "Flamengo campeão mundial",
    Imagem:'https://i.pinimg.com/736x/86/f2/5d/86f25d4afad7c383565cad0f412f6d3d.jpg'
}


  ]

  return (
    <PaperProvider>

      <ScrollView>

        <View style={styles.container}>
          <StatusBar style="auto" />


       
        
        
      
        
        


        
          


        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
