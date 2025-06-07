import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React, { useRef } from 'react';
import { Button } from 'react-native-paper'
import { Video } from 'expo-av';





export default function Noticias({ navigation, route }) {
  const video = useRef(null);
  return (
    <ScrollView>
      <View style={styles.container}>




        <Card style={{ backgroundColor: 'white' }}>
          <Card.Content>
            <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Gerson pode sair do Flamengo.</Text>
            <Text></Text>
            <Text></Text>
          </Card.Content>

          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/ba/60/34/ba603458e4b3b15d82fdddf53cb95b95.jpg' }} style={{ height: 400, width: 390 }} />
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>O Flamengo já sabe que o Zenit, da Rússia, está disposto a pagar a multa rescisória de Gerson. Diante da iminente saída do seu capitão, o Rubro-Negro exige que o valor seja quitado à vista. A decisão de aceitar a transferência, portanto, está nas mãos do volante. Ele está inclinado a aceitar a oferta do time europeu.</Text>

          <Text></Text>


          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>Pelo contrato, a multa é de 25 milhões de euros (R$ 159 milhões). Se o Zenit pagar o valor estipulado, não precisa negociar demais termos com o Flamengo. Algo parecido com o que ocorreu com a chegada de De la Cruz, quando o Fla pagou a multa ao River Plate (Argentina).</Text>
        </Card>

        <Text></Text>

        <Card style={{ backgroundColor: 'white' }}>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Jorginho apresentado no Flamengo.</Text>
          <Text></Text>
          <Text></Text>

          <Card.Content>
          </Card.Content>

          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/27/32/76/273276ba2c8d62a2e55eaa4e9b2d0284.jpg' }} style={{ height: 400, width: 390 }} />
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>Jorginho falou pela primeira vez como jogador do Flamengo em entrevista coletiva na tarde deste sábado, no Ninho do Urubu. Ele apareceu com uma camisa diferente, que será o uniforme de apresentação dos jogos a partir da Copa do Mundo de Clubes. Sorridente, o volante contou como tomou a decisão de voltar ao futebol brasileiro depois de sair do país ainda nas categorias de base.</Text>
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>— É um momento da minha vida em que depois de tanto tempo fora que essa oportunidade apareceu. Foi no momento certo. Poder voltar ao meu país depois de tantos anos foi algo que sinceramente me surpreendeu um pouco, mas estou muito feliz com essa oportunidade. Quero viver ela da melhor maneira possível e, sendo com um clube como esse, te dá só mais motivos e vontade de querer viver isso. Pelo elenco que tem, o treinador e pelo apoio dessa nação maravilhosa que sempre acompanhei de longe — comentou.</Text>
          <Text></Text>
          <Text variant='labelMedium'>Aqui está a entrevista de Jorginho. </Text>
          <Text></Text>
          
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: 'https://rr2---sn-n3paaoxuuxax-cnce.googlevideo.com/videoplayback?expire=1749341683&ei=koFEaPyNONvj6dsPyvub0AU&ip=83.81.37.17&id=o-APJ5YICM-2jzlo42yFPbc3HgA4UsEE3xxT-H_JdV_Jpp&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AY1jyLOgv0puS6mFyqKDGQrxwFAl1AMf2BDBhw9tV_3w2i6lGNjkjwh-b3060q7rHUv0IyXbQsxoP_Pa&spc=l3OVKabHQGQSS3HSs53k4QAWRn9wxptQpTgvlyhOKnb2sD7zVaVhaiGh3Z_NdyNkIGHjWA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=Vv8TZZSoHdnPm96pUhN2Pi4Q&rqh=1&gir=yes&clen=64406898&ratebypass=yes&dur=1270.247&lmt=1749315175925713&fexp=24350590,24350737,24350827,24350961,24351064,24351173,24351316,24351318,24351495,24351528,24351638,24351658,24351661,24351759,24351907,24352030,24352102,24352190,24352216,51331020&c=MWEB&sefc=1&txp=7309224&n=VlGaCbmRiSe1KQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgOB2pm1Cuqy5YpwvAxPx7qUwEGwz-eljDveqjl9ssbMwCIQDI9mM3Lz_k1QM4oA9CjXAC0KgDQPMYS3lGU4ShH_XW5w%3D%3D&title=JORGINHO%20no%20FLAMENGO%20%7C%20APRESENTA%C3%87%C3%83O%20AO%20VIVO%20com%20IMAGENS&redirect_counter=1&rm=sn-5hnesk7e&rrc=104&req_id=7642b7e74caca3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1749323968,&mh=BR&mip=2804:8aa4:334c:d600:7c6a:934:e24d:93e&mm=31&mn=sn-n3paaoxuuxax-cnce&ms=au&mt=1749323618&mv=m&mvi=2&pl=37&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAO5he2VnRxqiV22pC80CBYZtTwe9Md5FPRdOZ-kJhIVuAiAcFc2BTXXwLj7hDNQRcc7Bx5nE3Ov7hlo14MJLcyIgJw%3D%3D' }}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        </Card>

        <Text></Text>


        <Card style={{ backgroundColor: 'white' }}>
          <Text></Text>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Carrascal no Flamengo, será ?</Text>
          <Text></Text>
          <Text></Text>

          <Card.Content>
          </Card.Content>

          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/bc/59/e4/bc59e4567491058277ca780e436b91b7.jpg' }} style={{ height: 400, width: 390 }} />
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>O Flamengo já formalizou uma proposta para tentar tirar Carrascal do Dínamo de Moscou, da Rússia, e aguarda uma resposta. A investida rubro-negra no meia colombiano de 27 anos é de 12 milhões de euros (R$ 76,8 milhões), incluindo bônus por metas em contrato.</Text>
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>Internamente, o Flamengo vê a negociação como avançada, mas entende que precisa correr contra o tempo para ter o jogador à disposição para a Copa do Mundo de Clubes nos Estados Unidos. A lista dos jogadores inscritos no torneio deve ser enviada até a próxima terça.</Text>
          <Text></Text>

<Card style={{ backgroundColor: 'white' }}>
          <Text></Text>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Varela vai renovar ?</Text>
          <Text></Text>
          <Text></Text>

          <Card.Content>
          </Card.Content>

          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/3d/cd/2d/3dcd2d4f0c97d6d1c5940e5aa47bdcfa.jpg' }} style={{ height: 400, width: 390 }} />
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>Como já foi dito por José Boto, a única prioridade do Flamengo em relação à renovação de contratos é Varela. Isso porque, o vínculo do lateral com o Mengão se encerra no final deste ano. Desse modo, o uruguaio pode assinar um pré-contrato com qualquer clube a partir de julho. Com isso, o Mais Querido ‘corre’ contra o tempo para não perder o jogador de graça.</Text>
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>O Flamengo contratou Varela em julho de 2022, por empréstimo, junto ao Dínamo Moscou (RUS). Na sequência, após o fim do acordo, o Mais Querido acertou com o jogador de forma definitiva. Desde então, o uruguaio vestiu o Manto Sagrado em 95 oportunidades, somando três gols e três assistências. Além disso, o lateral possui no currículo: duas Copas do Brasil, dois Cariocas, uma Libertadores e uma Supercopa do Brasil. </Text>
          <Text></Text>
        </Card>

<Card style={{ backgroundColor: 'white' }}>
          <Text></Text>
          <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Flamengo compra terreno do gasômetro, para a construção do estádio.</Text>
          <Text></Text>
          <Text></Text>

          <Card.Content>
          </Card.Content>

          <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/6f/5b/0a/6f5b0a4542bc205b26a9b0e5e9423d37.jpg' }} style={{ height: 400, width: 390 }} />
          <Text></Text>
          <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>Depois de anunciar o acordo com a Caixa Econômica Federal, o Flamengo tomou posse do terreno do Gasômetro na manhã desta quinta-feira e deu mais um passo para a construção do seu sonhado estádio. O presidente rubro-negro, Rodolfo Landim, assinou o documento que formalizou a propriedade em cerimônia no Centro de Operações da Prefeitura do Rio de Janeiro.</Text>
          <Text></Text>
 


        </Card>
<Button
        mode="contained-tonal"
        onPress={() => navigation.goBack ('MenuInicial')}
        style={styles.button}
      >
        Voltar para a tela inicial
      </Button>
        </Card>
      </View>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
  },
  video: {
    width: '100%',
    height: 300,
  },

 button: {
    backgroundColor: 'red',
    alignItems: 'flex-start',
    paddingTop: 10
  }

})