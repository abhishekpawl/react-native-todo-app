import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ebbba7', '#cfc7f8']} style={styles.container}>
        <Text style={styles.content}>App</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    color: 'black',
  },
  content: {
    padding: 40,
    color: 'black'
  }
});
