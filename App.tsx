import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/features/home/screens/HomeScreen';
import {ThemeProvider} from './src/contexts/theme/ThemeContext';
export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <HomeScreen/>
      </View>
    </ThemeProvider>
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
