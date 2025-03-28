import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Filme from './Componentes/Filme';


export default function App() {

  const listaFilmes = [
    {
      "Nome": "Velozes e Furiosos 5",
      "Ano_de_lancamento": 2011,
      "Diretor": "Justin Li",
      "Tipo": "Ação",
      "Duração": "130 minutos",
      "Imagem": 'https://i.pinimg.com/236x/93/49/1f/93491f2a040b5a9268e1b8f291720725.jpg'
    },
    {
      "Nome": "Premonição 4",
      "Ano_de_lancamento": 2009,
      "Diretor": "David Ellis",
      "Tipo": "Terror",
      "Duração": "142 minutos",
      "Imagem": 'https://i.pinimg.com/236x/c9/9b/1d/c99b1d423db15f252f79872d9d828e79.jpg'
    },

    {
      "Nome": "Invocação do Mal 2",
      "Ano_de_lancamento": 2016,
      "Diretor": "James Wan",
      "Tipo": "Terror",
      "Duração": "134 minutos",
      "Imagem": 'https://i.pinimg.com/236x/5b/99/2a/5b992a5d6f0bccf7aca58156b894f2f6.jpg'
    },
    {
      "Nome": "Segurança de Shopping 2",
      "Ano_de_lancamento": 2015,
      "Diretor": "Andy Fickman",
      "Tipo": "Comédia",
      "Duração": "94 minutos",
      "Imagem": 'https://i.pinimg.com/236x/9b/59/2e/9b592e61aa95c92666e12c55f5084566.jpg'
    },
    {
      "Nome": "Diário de uma Paixão",
      "Ano_de_lancamento": 2004,
      "Diretor": "Nick Cassavetes",
      "Tipo": "Romance",
      "Duração": "121 minutos",
      "Imagem": 'https://i.pinimg.com/236x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg'
    },

  ]





  return (
    <ScrollView>
      <View style={styles.container}>


        <StatusBar style="auto" />
        {
          listaFilmes.map(
            Filmes => {
              return (
                <Filme
                  Nome={Filmes.Nome}
                  Ano de Lançamento={Filmes.Ano_de_lancamento}
                  Diretor={Filmes.Diretor}
                  Tipo={Filmes.Tipo}
                  Duração={Filmes.Duração}
                  Imagem={Filmes.Imagem}
                />
              )
            }
          )
        }

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
