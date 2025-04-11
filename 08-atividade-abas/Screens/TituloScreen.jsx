import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Text, Card, Title, Paragraph } from 'react-native-paper'


export default function TituloScreen() {
  return (
    <ScrollView>

    <View style={styles.container}>
    
    <Text variant='headlineSmall' style={{ fontWeight: 'bold', color: 'white' }}>Times</Text>
    
    <Card style={{ margin :'20'}}>
    <Card.Content>
    <Title>Palmeiras</Title>
    <Paragraph>1 Copa Rio: 1951.</Paragraph>
<Paragraph>3 Copas Libertadores da América (1999, 2020, 2021).</Paragraph>
<Paragraph>12 Campeonatos Brasileiros (1960, 1967, 1967, 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022 e 2023).</Paragraph>
<Paragraph>2 Campeonatos Brasileiros Série B (2003 e 2013). </Paragraph>
<Paragraph>4 Copas do Brasil (1998, 2012, 2015 e 2020).</Paragraph>
<Paragraph>1 Copa dos Campeões (2000).</Paragraph>
<Paragraph>1 Supercopa do Brasil (2023).</Paragraph>
<Paragraph>26 Campeonatos Paulistas (1920, 1926, 1927, 1932, 1933, 1934, 1936, 1940, 1942, 1944, 1947, 1950, 1959, 1963, 1966, 1972, 1974, 1976, 1993, 1994, 1996, 2008, 2020, 2022, 2023 e 2024).</Paragraph>
<Paragraph>5 Torneios Rio-São Paulo (1933, 1951, 1965, 1993 e 2000)</Paragraph>
    </Card.Content>
    <Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/474x/96/a4/6d/96a46d845af876f648963f99df451e82.jpg'}} />
    </Card>
    
    
    <Card style={{ margin :'20'}}>
    <Card.Content>
    <Title>São Paulo</Title>
    <Paragraph> 3 Mundiais de Clube da FIFA (1992, 1993 e 2005) </Paragraph>
    <Paragraph>22 Campeonatos Paulistas (1931, 1943, 1945, 1946, 1948, 1949, 1953, 1957, 1970, 1971, 1975, 1980, 1991, 1992, 1998, 2000, 2002, 2005 e 2021).</Paragraph>
    <Paragraph>1 Copa do Brasil (2023). </Paragraph>
    <Paragraph>6 Campeonatos Brasileiros (1977, 1986, 1991, 2006, 2007 e 2008).</Paragraph>
    <Paragraph>2 Recopas Sulamericanas (1993 e 1994).</Paragraph>
    <Paragraph>3 Copas Libertadores (1992, 1993 e 2005).</Paragraph>
    <Paragraph>1 Copa Sul-Americana (2012).</Paragraph>
    <Paragraph>1 Copa Conmebol (1994).</Paragraph>
    </Card.Content>
    <Card.Cover  style={{width:'100%', height: 300}} source={{ uri: 'https://i.pinimg.com/736x/39/9a/90/399a9099b5b825ced1b5e09daa72e270.jpg'}} />
    </Card>
    
    
    <Card style={{ margin :'10'}}>
    <Card.Content>
    <Title>Flamengo</Title>
    <Paragraph>3 Libertadores da América (1981, 2019 e 2022).</Paragraph>
    <Paragraph>8 Campeonatos Brasileiros (1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020).</Paragraph>
    <Paragraph>5 Copas do Brasil (1990, 2006, 2013, 2022 e 2024).</Paragraph>
    <Paragraph>3 Supercopas do Brasil (2020, 2021 e 2025).</Paragraph>
    <Paragraph>39 Campeonatos Cariocas (1914, 1915, 1920, 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979 (especial), 1981, 1986, 1991, 1996, 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2020, 2021, 2024 e 2025).</Paragraph>
    <Paragraph>2 Torneios Rio-São Paulo (1940 e 1961).</Paragraph>
    <Paragraph>1 Copa Mercosul (1999).</Paragraph>
    <Paragraph>1 Mundial de Clubes da FIFA (1981).</Paragraph>
    </Card.Content>
    <Card.Cover style={{width:'100%', height: 300}} source={{ uri: 'https://i.pinimg.com/236x/cb/1a/86/cb1a867789f74c597f41365f60488c6e.jpg'}} />
    </Card>
    
    <Card style={{ margin :'20'}}>
    <Card.Content>
    <Title>Santos</Title>
    <Paragraph>3 Libertadores (1962, 1963 e 2011). </Paragraph>
    <Paragraph>2 Mundiais de Clubes da FIFA (1962,1963).</Paragraph>
    <Paragraph>1 Recopa Sul-Americana (2012). </Paragraph>
    <Paragraph>8 Campeonatos Brasileiros (1961, 1962, 1963, 1964, 1965, 1968, 2002 e 2004).</Paragraph>
    <Paragraph>1 Copa do Brasil (2010).</Paragraph>
    <Paragraph>22 Campeonatos Paulistas (1935, 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969, 1973, 1978, 1984, 2006, 2007, 2010, 2011, 2012, 2015 e 2016).</Paragraph>
    <Paragraph>5 Torneios Rio-São Paulo (1959, 1963, 1964, 1966 e 1997).</Paragraph>
    <Paragraph>1 Copa CONMEBOL (1998).</Paragraph>
    </Card.Content>
    <Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/236x/71/cd/83/71cd8367479d2f2ca45f1eb9b51b90ad.jpg'}} />
    </Card>
    
    <Card style={{ margin :'20'}}>
    <Card.Content>
    <Title>Corinthians</Title>
    <Paragraph>2 Mundiais de Clubes da FIFA (2000 e 2012). </Paragraph>
    <Paragraph>1 Libertadores (2012). </Paragraph>
    <Paragraph>1 Recopa Sul-Americana (2013). </Paragraph>
    <Paragraph>7 Campeonatos Brasileiros (1990, 1998, 1999, 2005, 2011, 2015 e 2017). </Paragraph>
    <Paragraph>3 Copas do Brasil (1995, 2002 e 2009). </Paragraph>
    <Paragraph>30 Campeonatos Paulistas (1914, 1916, 1922, 1923, 1924, 1928, 1929, 1930, 1937, 1938, 1939, 1941, 1951, 1952, 1954, 1977, 1979, 1982, 1983, 1988, 1995, 1997, 1999, 2001, 2003, 2009, 2013, 2017, 2018 e 2019).
    </Paragraph>
    <Paragraph>1 Supercopa do Brasil (1991). </Paragraph>
    <Paragraph>1 Campeonato Brasileiro série B (2008). </Paragraph>
    <Paragraph>5 Torneios Rio-São Paulo (1950, 1953, 1954, 1966 e 2002). </Paragraph>
    </Card.Content>
    <Card.Cover style={{width:'100%' , height: 300}} source={{ uri: 'https://i.pinimg.com/474x/7e/12/bd/7e12bd2ad6059568c7667d81bdf4b534.jpg'}} />
    </Card>
    
    
    
    
    </View>
    
    </ScrollView>
    
    
    
      )
    }
  
    const styles = StyleSheet.create({
      container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      paddingTop: 10
      }
      
      
      })

