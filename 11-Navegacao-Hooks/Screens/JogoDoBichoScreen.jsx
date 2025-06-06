import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button, Image } from 'react-native-paper'







export default function JogoDoBicho() {


    const animais = [
        {
        numero: 1,
        nome: 'Avestruz',
        imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg',
        },
        {
        numero: 2,
        nome: 'Águia',
        imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg',
        },
        {
        numero: 3,
        nome: 'Burro',
        imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg',
        },
        {
        numero: 4,
        nome: 'Borboleta',
        imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg',
        },
        {
        numero: 5,
        nome: 'Cachorro',
        imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg',
        },
        {
        numero: 6,
        nome: 'Cabra',
        imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg',
        },
        {
        numero: 7,
        nome: 'Carneiro',
        
        imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg',
        },
        {
        numero: 8,
        nome: 'Camelo',
        imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg',
        },
        {
        numero: 9,
        nome: 'Cobra',
        imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg',
        },
        {
        numero: 10,
        nome: 'Coelho',
        imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg',
        },
        ];




    const [animal, setAnimal] = useState({})
   

        function alterar() { 
            const NumeroGerado = Math.round(Math.random() * 11)
            const Bicho = animais.find(animal => NumeroGerado === animal.numero)
            setAnimal (Bicho)
        }




  return (
    <View>
      <Card style={{ margin: 10}}>

      <Card.Cover source={{ uri: animal.imagem }} />







        <Card.Content>

            <Text>Animal Sorteado</Text>
            <Text variant='displayMedium'>{animal.nome}</Text>
            </Card.Content>

            
            <Card.Actions>

            <Button icon='forward' onPress={alterar} >gerar</Button>




            </Card.Actions>
        </Card>

    </View>
  )
}

