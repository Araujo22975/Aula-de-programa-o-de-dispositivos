import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    //Lógica do Componente
    const nome = "Alex"
    const idade = 16

    function checarMaiorIdade(){
        console.log("Chamou a função checarMaiorIdade")
        if(idade >= 18){
            return "Maior de Idade"
        }else {
            return "Menor de Idade"
        }
    }

    function alerta(){
        console.log("Clicou no botão!!!")
        alert('Clicou no botão!!!')
    }



    // Retorno do JSX
  return (
    <View style={styles.container}>


        <Text style={styles.texto}>JavaScriptComponente</Text>
        <Text style={styles.texto}>NOME: {nome}</Text>
        <Text style={styles.texto}>IDADE: {idade}</Text>
        <Text style={styles.texto}>IDADE+40: {idade + 40}</Text>
        <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>

        <Button title='enviar' onPress={alerta} />

     


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        borderWidth: 10,
        padding: 15
    },
    texto: {
        fontSize:25,
        fontWeight:600
    }
})