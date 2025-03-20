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
        
        <Text style={{ fontSize: 25 }}>{nome}</Text>
        
        
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
        ></Image><Text style={{ fontSize: 25 }}>Clássico FLA X FLU, O Fla-Flu é considerado um dos maiores clássicos do futebol mundial, com muita tradição e emoção em cada partida. A rivalidade tem suas raízes desde o início do século XX, e, ao longo dos anos, as equipes protagonizaram jogos memoráveis.</Text>
        <Image
          source={require('./Imagens/informacoes.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        /> <Text style={{fontSize: 25}}>O **Clássico Botafogo x Flamengo** é um dos maiores confrontos do futebol carioca, conhecido também como **Clássico Vovô**. Ele é marcado pela rivalidade histórica entre as duas equipes, com o Flamengo sendo um dos clubes mais vitoriosos do Brasil e o Botafogo, com uma rica tradição e uma torcida fiel. O primeiro confronto aconteceu em 1912, e desde então, os jogos entre eles sempre geram muita emoção e disputas intensas.</Text>
        <Image
          source={require('./Imagens/Flamengo.png')}
          style={{
            height: 225,
            width: 260
          }}

        /> <Text style={{fontSize: 25}}>O símbolo do Flamengo é composto pelas cores vermelho e preto, representando a paixão e força do clube. As letras CRF no centro do escudo representam o nome do clube, Clube de Regatas do Flamengo. O design do escudo remete à tradição do clube, que começou como um clube de regatas. A Cruz de Malta no símbolo faz referência às suas origens no remo. O emblema simboliza a maior torcida do Brasil e o status do clube como um dos mais vitoriosos do país.</Text>


        <Image
          source={require('./Imagens/Gabigol.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        /> <Text style={{fontSize: 25}}>**Gabigol** (Gabriel Barbosa) é um dos maiores ídolos recentes do **Flamengo**. Chegou ao clube em 2019 e se destacou por sua habilidade em marcar gols, especialmente nas finais. Foi o herói da **Libertadores de 2019**, marcando dois gols na final contra o River Plate, incluindo o gol da vitória. Também ajudou o Flamengo a conquistar o **Campeonato Brasileiro de 2019**, além de outros títulos importantes. Sua presença decisiva e carisma o tornaram um ícone da torcida.</Text>

        <Image
          source={require('./Imagens/Imagem.png')}
          style={{
            height: 225,
            width: 260
          }}

        /> <Text style={{fontSize: 25}}>A **Flastore** é a loja oficial do **Flamengo**, onde os torcedores podem comprar produtos do clube, como camisas, acessórios, souvenirs, e itens de colecionador. A loja tem tanto versões físicas, localizadas em pontos estratégicos como o **Maracanã**, quanto uma plataforma online para compras pela internet.

        Além de ser um ponto de venda, a Flastore também representa a paixão da torcida flamenguista, oferecendo produtos oficiais que conectam os torcedores com o time. Se você quiser mais informações sobre a loja ou quiser saber sobre um produto específico, me avise!</Text>










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
    fontSize: 25,
    fontWeight: 400,
    fontStyle: 'italic'
  }
});

