import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/features/home/screens/HomeScreen';
import {ThemeProvider} from './src/contexts/theme/ThemeContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen/>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
