import React,{createContext,useContext,useState,useMemo}from 'react';
import {lightTheme,darkTheme,type AppTheme}from '../../theme/index';
import {useColorScheme} from 'react-native';

//define type for the different mode types 
type AppMode = 'light' | 'dark' | 'system';

//define context type to use in the create context 
type ThemeContextType={
    mode:AppMode;
    isDark:boolean;
    appTheme:AppTheme;
    setMode:(mode:AppMode)=>void;
}

//step 1 create the context
const ThemeContext =createContext<ThemeContextType|undefined>(undefined);


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

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useAppTheme must be used within ThemeProvider',
    );
  }

  return context;
}