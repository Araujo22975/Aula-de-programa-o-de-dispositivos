import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import MegaSenaScreen from './Screens/MegaSenaScreen';
import JogoDoBichoScreen from './Screens/JogoDoBichoScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


<JogoDoBichoScreen/>
<MegaSenaScreen/>


    </View>
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
