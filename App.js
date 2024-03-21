import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Deyvid from './SRC/Components/Deyvid/main';
import Nome2 from './SRC/Components/Possivel Dupla/index';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Sei que o professor não quer texto (isso é um Text)</Text>
    <Deyvid></Deyvid>
    <Nome2></Nome2>
      <StatusBar style="auto" />
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
