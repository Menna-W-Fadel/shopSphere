import React,{createContext,useContext,useState,useMemo}from 'react';
import {lightTheme,darkTheme,type AppTheme}from '../../theme/index';
import {useColorScheme} from 'react-native';

//define type for the different mode types 
type AppMode = 'light' | 'dark' | 'system';

//define context type to use in the create context 
export type ThemeContextType={
    mode:AppMode;//current selected option (light,dark,system)
    isDark:boolean;//boolean to decide the render 
    appTheme:AppTheme; //type has the theme object (lightTheme or darkTheme)
    setMode:(mode:AppMode)=>void;
}

//step 1 create the context
export const ThemeContext =createContext<ThemeContextType|undefined>(undefined);


export function ThemeProvider({children}: {children: React.ReactNode}){
  
    const colorScheme = useColorScheme();
    const [mode,setMode] = useState<AppMode>('system');
    const isDark = mode === 'system' ? colorScheme === 'dark' : mode === 'dark';
    const appTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);
    const themeValue = useMemo(()=>({
        mode,
        isDark,
        appTheme,
        setMode
    }), [mode, isDark, appTheme, setMode]);
    return(
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}
