import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

export default function MegaSenaApp() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogoMegaSena() {
    const numeros = new Set();
    while (numeros.size < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      numeros.add(num);
    }
    const jogoArray = Array.from(numeros).sort((a, b) => a - b);
    setJogoGerado(jogoArray);
    setJogosMegaSena((prev) => [jogoArray, ...prev]);
  }

  function renderItem({ item, index }) {
    return (
      <View
        style={{
          marginBottom: 16,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 6 }}>
          Jogo #{index + 1}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {item.map((num) => (
            <View
              key={num}
              style={{
                backgroundColor: "#2e86de",
                borderRadius: 20,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                {num}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Button title="Gerar Jogo Mega-Sena" onPress={gerarJogoMegaSena} />

      {jogoGerado.length > 0 && (
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Último jogo gerado:
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {jogoGerado.map((num) => (
              <View
                key={num}
                style={{
                  backgroundColor: "#2e86de",
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 8,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                >
                  {num}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        Histórico de jogos:
      </Text>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
        ListEmptyComponent={<Text>Nenhum jogo gerado ainda.</Text>}
      />
    </View>
  );
}