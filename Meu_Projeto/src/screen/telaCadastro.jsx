import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PerfilSocioScreen = ({ navigation, route }) => {
  // Dados do usuário passados pela navegação ou do contexto/API
  const { usuario } = route.params || {
    usuario: {
      nome: 'Torcedor Rubro-Negro',
      email: 'torcedor@flamengo.com.br',
      numeroSocio: 'FLA2023001',
      plano: 'Rubro-Negro Premium',
      validade: '12/2024',
      status: 'Ativo'
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Usuario)}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MEU PERFIL</Text>
        <View style={{ width: 24 }} /> {/* Espaço para alinhamento */}
      </View>
      
      {/* Seção do perfil */}
      <View style={styles.profileSection}>
        <Image 
          source={require('../assets/avatar.png')} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>{usuario.nome}</Text>
        <Text style={styles.userEmail}>{usuario.email}</Text>
        
        <View style={styles.membershipCard}>
          <Text style={styles.cardTitle}>CARTÃO DE SÓCIO</Text>
          <Text style={styles.memberNumber}>{usuario.numeroSocio}</Text>
          <Text style={styles.memberPlan}>{usuario.plano}</Text>
          <Text style={styles.memberStatus}>Status: <Text style={{ color: '#4CAF50' }}>{usuario.status}</Text></Text>
          <Text style={styles.memberExpiry}>Válido até: {usuario.validade}</Text>
        </View>
      </View>
      
      {/* Menu de opções */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="edit" size={24} color="#C52626" />
          <Text style={styles.menuText}>Editar Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="credit-card" size={24} color="#C52626" />
          <Text style={styles.menuText}>Meu Cartão</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="receipt" size={24} color="#C52626" />
          <Text style={styles.menuText}>Meus Pagamentos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="event-seat" size={24} color="#C52626" />
          <Text style={styles.menuText}>Meus Ingressos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="logout" size={24} color="#C52626" />
          <Text style={styles.menuText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#C52626',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#C52626'
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  userEmail: {
    color: '#666',
    marginBottom: 20
  },
  membershipCard: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  cardTitle: {
    color: '#C52626',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  memberNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  memberPlan: {
    color: '#333',
    marginBottom: 10
  },
  memberStatus: {
    marginBottom: 5
  },
  memberExpiry: {
    color: '#666'
  },
  menuSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16
  }
});

export default PerfilSocioScreen;