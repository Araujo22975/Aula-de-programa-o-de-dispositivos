import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import Atleta from './componentes/Atleta';


export default function App() {
  return (
    <View style={styles.container}>
      

<Atleta/>


     {/* <PrimeiroComponente /> */}
    {/* <SegundoComponente /> */}



      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
