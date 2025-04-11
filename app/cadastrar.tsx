import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

const local = true; 
export const API_URL = local
  ? 'http://192.168.0.62:3000'
  : 'https://tccback-production.up.railway.app';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [sexualidade, setSexualidade] = useState('');
  const [etnia, setEtnia] = useState('');
  

  const handleHome = () => {
    router.replace('/');
  };

  const handleCadastro = async () => {
    const usuario = {
      nome,
      email,
      senha,
      cpf,
      telefone,
      cidade,
      genero,
      idade,
      sexualidade,
      etnia
    };
  
    console.log('Enviando:', usuario); 
  
    try {
      const response = await fetch(`${API_URL}/api/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
      });
  
      const data = await response.json();
      if(data.flag == true)
      {
        Alert.alert('Sucesso', 'Cadastro feito com sucesso');
        handleHome()
      }
      else
        Alert.alert('Algo deu errado', 'Cadastro não realizado')
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop&q=80' }}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <Text style={styles.subtitle}>Preencha os dados abaixo</Text>
        <TouchableOpacity onPress={handleHome} style={styles.returnHome}>
          <Text style={styles.returnHomeText}>Voltar home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerInput}>
        <View style={styles.containerInputInside}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome}/>
          </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Idade</Text>
          <TextInput style={styles.input} value={idade} onChangeText={setIdade} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sexualidade</Text>
          <TextInput style={styles.input} value={sexualidade} onChangeText={setSexualidade} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Etnia</Text>
          <TextInput style={styles.input} value={etnia} onChangeText={setEtnia} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gênero</Text>
          <TextInput style={styles.input} value={genero} onChangeText={setGenero} />
        </View>

          {/* <RNPickerSelect
            onValueChange={(value) => setGenero(value)}
            items={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Prefiro não informar', value: 'N' },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: 'Selecione um gênero', value: null }}
          />

          <RNPickerSelect
            onValueChange={(value) => setEtnia(value)}
            items={[
              { label: 'Branco', value: 'Branco' },
              { label: 'Preto', value: 'Preto' },
              { label: 'Pardo', value: 'Pardo' },
              { label: 'Amarela', value: 'Amarela' },
              { label: 'Indígena', value: 'Indígena' },
              { label: 'Não me identifico com nenhuma', value: 'N' },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: 'Etnia', value: null }}
          />

          <RNPickerSelect
            onValueChange={(value) => setSexualidade(value)}
            items={[
              { label: 'Hetero', value: 'Hetero' },
              { label: 'Homosexual', value: 'Homosexual' },
              { label: 'Outro', value: 'N' },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: 'Sexualidade', value: null }}
          /> */}

          <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
            <Text style={styles.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    color: '#1a1a1a',
    marginBottom: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    color: '#1a1a1a',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  containerInput: {
    alignItems: 'center',
  },
  containerInputInside: {
    width: '90%',
    gap: 20,
    paddingBottom: 100,
  },
  returnHome: {
    alignSelf: 'flex-start',
  },
  returnHomeText: {
    fontSize: 14,
    color: 'black',
  },
  inputGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4
  },
  inputPos: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#fff'
  }
});
