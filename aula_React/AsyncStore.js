import React,{useEffect, useState}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStore from '@react-native-async-storage/async-storage';

export default function App() {

  const [name,setName] = useState ('Jão V. Ale')
  const [input,setInput] = useState ('')

  useEffect(()=>{

    async function mostrarNome(){
      
      const nomeSalvo = await AsyncStore.getItem('nome');

      if(nomeSalvo !== null){
        setName(nomeSalvo)
      }
    }

    mostrarNome();

  },[])

  useEffect(()=>{

    async function salvarNome(){

      await AsyncStore.setItem('nome',name);
    }

    salvarNome();

  },[name])



  function trocaNome(){
    setName(input)

  }

  return (
    <View style={styles.container}>
      <TextInput style = {styles.input} value = {input} onChangeText = {(texto) => setInput(texto)} />
      <TouchableOpacity style = {styles.botao} onPress = {() => trocaNome()}> TROCAR </TouchableOpacity>

      <Text> {name} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    width: '90%',
    backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'cyan'
  },
  input: {
    width: '90%',
    height: 30,
    borderRadius: 3,
    marginTop: 10,
    borderWidth: 2,
  
  }
});
