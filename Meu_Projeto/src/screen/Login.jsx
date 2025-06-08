import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Validação simples
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    // Simulação de login bem-sucedido
    // Na prática, você faria uma chamada à API aqui
    navigation.navigate('PerfilSocio', {
      usuario: {
        nome: 'Torcedor Rubro-Negro',
        email: email,
        numeroSocio: 'FLA2023001',
        plano: 'Rubro-Negro Premium'
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FLAMENGO</Text>
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.registerButton}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.registerButtonText}>Não tem cadastro? Torne-se Sócio!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff'
  },
  logo: {
    color: '#C52626',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  inputIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16
  },
  loginButton: {
    backgroundColor: '#C52626',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center'
  },
  registerButtonText: {
    color: '#C52626',
    fontSize: 14
  }
});

export default LoginScreen;