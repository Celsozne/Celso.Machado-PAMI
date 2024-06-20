import React from 'react';
import { View, StyleSheet } from "react-native";
import BotaoProps from '@/components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const handlePress2 = () => {
    alert('Outra Função');
  }
  return (
    <View style = {styles.container}>
      <BotaoProps label = "Clique aqui" corFundo="green"
      onPress={handlePress} />
      <BotaoProps label = "Clique Aqui" corFundo="pink"
      onPress={handlePress2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;