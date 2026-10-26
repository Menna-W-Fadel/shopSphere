import { useContext } from "react";
import { ThemeContext , type ThemeContextType} from "../contexts/theme/ThemeContext";

export function useAppTheme() :ThemeContextType{
    
  const context = useContext(ThemeContext);

  //forget to wrap your application in ThemeProvider and use the hook inside a screen
  if (context === undefined) {
    throw new Error(
      'useAppTheme must be used within ThemeProvider',
    );
  }

  return context;
}