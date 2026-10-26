import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from './src/contexts/theme/ThemeContext';
import MainApp from './src/app/MainApp';

export default function App() {
  return (
    <ThemeProvider>
      <MainApp/>
    </ThemeProvider>
  );
}
