import { View, Text ,StyleSheet,Platform} from 'react-native'
import React,{useMemo} from 'react'
import {useAppTheme} from '../hooks/useAppTheme'
import {type AppTheme} from '../theme/index'    
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../features/home/screens/HomeScreen';
export default function MainApp() {
  const {appTheme} = useAppTheme();
  const styles = useMemo(()=>createStyles(appTheme),[appTheme])

  return (
      <View style={styles.container}>
        <SafeAreaProvider style={Platform.OS === 'android' ? {paddingTop: appTheme.spacing.xl} : {paddingTop: 0}}>
        <HomeScreen/>
        </SafeAreaProvider>
      </View>
  
  )
}

const createStyles = (theme: AppTheme) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
});
