import {StyleSheet,View,Text,Pressable} from 'react-native';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {type AppTheme} from '../../../theme/index';
import { useMemo } from 'react';

function HomeScreen () {
    const {mode,appTheme,setMode} = useAppTheme();
    const styles = useMemo(
  () => createStyles(appTheme),
  [appTheme],
);
    return(
        
        <View style={styles.container}>
            <Text style={styles.headerStyle}> home screen</Text>
            <Text style={styles.headerStyle}> current mode is {mode}</Text>
            <Pressable onPress={()=>setMode('light')}>
                <Text style={styles.headerStyle}> set light mode</Text>
            </Pressable>
            <Pressable onPress={()=>setMode('dark')}>
                <Text style={styles.headerStyle}> set dark mode</Text>  
            </Pressable>
        </View>
    )
}


const createStyles = (appTheme:AppTheme)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appTheme.colors.background,
        alignItems:'center',
        justifyContent:'center'
    },
    headerStyle:{
        color:appTheme.colors.textPrimary,
        fontSize:20,
    }
})

export default HomeScreen;