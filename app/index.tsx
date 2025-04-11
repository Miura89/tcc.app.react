import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const handleReset = () => {
    router.replace('/reset-password')
  }

  const profile = () => {
    router.replace('/tickets')
  }
  const handleLogin = async () => {
    const login = { email, senha };

    try {
      const response = await fetch('http://tccback-production.up.railway.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });

      const data = await response.json();

      if (data.flag === true) {
        Alert.alert('Bem-vindo', data.message);
        await AsyncStorage.setItem('token', data.token);

        const token = await AsyncStorage.getItem('token');
        if (token) router.replace("/home")
      } else {
        Alert.alert('Algo deu errado', data.message);
      }
    } catch (error) {
      console.error('Erro ao logar:', error);
    }
  };

  const handleCadastrar = () => {
    router.replace('/cadastrar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop&q=80',
          }}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-vindo novamente!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setUsername}
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={() => handleReset()} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.btnsSec}>
            <TouchableOpacity style={styles.cadastroButton}>
              <Text style={styles.cadastroButtonText}>Entrar sem login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCadastrar} style={styles.cadastroButton}>
              <Text style={styles.cadastroButtonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '30%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#1a1a1a',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  btnsSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cadastroButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cadastroButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: 'black',
  },
});
