import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Usuario from './Usuario';

const CadastroSocioScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    plano: '',
    senha: '',
    confirmarSenha: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!form.nome) {
      newErrors.nome = 'Nome completo é obrigatório';
      valid = false;
    }

    if (!form.cpf || form.cpf.length !== 11) {
      newErrors.cpf = 'CPF inválido (11 dígitos)';
      valid = false;
    }

    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }

    if (!form.telefone || form.telefone.length < 11) {
      newErrors.telefone = 'Telefone inválido';
      valid = false;
    }

    if (!form.plano) {
      newErrors.plano = 'Selecione um plano';
      valid = false;
    }

    if (!form.senha || form.senha.length < 6) {
      newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
      valid = false;
    }

    if (form.senha !== form.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Cadastro realizado!',
        'Seu cadastro como sócio torcedor foi realizado com sucesso!',
        [
          { text: 'OK', onPress: () => navigation.goBack(Usuario) }
        ]
      );
      // Aqui você normalmente enviaria os dados para um backend
      console.log('Dados do formulário:', form);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack(Usuario)}
      >
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>TORCEDOR</Text>
        <Text style={styles.subtitle}>SEJA SÓCIO DO MAIOR DO BRASIL</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome Completo*</Text>
        <TextInput
          style={[styles.input, errors.nome && styles.inputError]}
          placeholder="Digite seu nome completo"
          value={form.nome}
          onChangeText={(text) => setForm({...form, nome: text})}
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={[styles.input, errors.cpf && styles.inputError]}
          placeholder="000.000.000-00"
          keyboardType="numeric"
          value={form.cpf}
          onChangeText={(text) => setForm({...form, cpf: text.replace(/\D/g, '')})}
          maxLength={11}
        />
        {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}

        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="seu@email.com"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => setForm({...form, email: text})}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Telefone*</Text>
        <TextInput
          style={[styles.input, errors.telefone && styles.inputError]}
          placeholder="(21) 99999-9999"
          keyboardType="phone-pad"
          value={form.telefone}
          onChangeText={(text) => setForm({...form, telefone: text.replace(/\D/g, '')})}
          maxLength={11}
        />
        {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua, número - Bairro"
          value={form.endereco}
          onChangeText={(text) => setForm({...form, endereco: text})}
        />

        <Text style={styles.label}>Plano*</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity 
            style={[styles.radioButton, form.plano === 'rubro-negro' && styles.radioSelected]}
            onPress={() => setForm({...form, plano: 'rubro-negro'})}
          >
            <Text style={styles.radioText}>Rubro-Negro</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.radioButton, form.plano === 'flamengo' && styles.radioSelected]}
            onPress={() => setForm({...form, plano: 'flamengo'})}
          >
            <Text style={styles.radioText}>Flamengo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.radioButton, form.plano === 'nacao' && styles.radioSelected]}
            onPress={() => setForm({...form, plano: 'nacao'})}
          >
            <Text style={styles.radioText}>Nação</Text>
          </TouchableOpacity>
        </View>
        {errors.plano && <Text style={styles.errorText}>{errors.plano}</Text>}

        <Text style={styles.label}>Senha*</Text>
        <TextInput
          style={[styles.input, errors.senha && styles.inputError]}
          placeholder="Mínimo 6 caracteres"
          secureTextEntry
          value={form.senha}
          onChangeText={(text) => setForm({...form, senha: text})}
        />
        {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

        <Text style={styles.label}>Confirmar Senha*</Text>
        <TextInput
          style={[styles.input, errors.confirmarSenha && styles.inputError]}
          placeholder="Digite novamente sua senha"
          secureTextEntry
          value={form.confirmarSenha}
          onChangeText={(text) => setForm({...form, confirmarSenha: text})}
        />
        {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#C52626',
  },
  backText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  header: {
    backgroundColor: '#C52626',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  formContainer: {
    padding: 20,
  },
  label: {
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff3333',
  },
  errorText: {
    color: '#ff3333',
    marginTop: -10,
    marginBottom: 15,
    fontSize: 12,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    width: '30%',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#C52626',
    backgroundColor: 'rgba(197, 38, 38, 0.1)',
  },
  radioText: {
    color: '#333',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#C52626',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CadastroSocioScreen;