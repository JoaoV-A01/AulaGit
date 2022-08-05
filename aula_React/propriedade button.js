import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
   <View>
     <Cabecalho></Cabecalho>
     <Botao
       Logo = "game-controller"
       texto = "Jogos"
       cor = "blue"
       Logo2 = "car"
       texto2 = "Corrida"
       cor2 = "red"
     />
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
});
