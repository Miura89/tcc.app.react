import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

const local = true; 
export const API_URL = local
  ? 'http://192.168.0.62:3000'
  : 'https://tccback-production.up.railway.app';


export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    const bodyEmail = {
      "emailTo": email
    }
    console.log(bodyEmail.emailTo)
    try {
      const response = await fetch(`${API_URL}/api/usuarios/enviar-email-redefinir`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyEmail)
      });
  
      const data = await response.json();
      if(data.flag == true)
      {
        Alert.alert('Sucesso', 'Email enviado com suceso');
      }
      else
        Alert.alert('Algo deu errado', '')
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>
          Coloque seu email cadastrado, você receberá um email com um token de authenticação.
        </Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Enviar Token</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#1a1a1a',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    lineHeight: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
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
  resetButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});