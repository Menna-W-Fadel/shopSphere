import {ThemeProvider} from './src/contexts/theme/ThemeContext';
import MainApp from './src/app/MainApp';
import { Provider } from "react-redux";
import { store } from "@/store/index";
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainApp/>
      </ThemeProvider>
    </Provider>
  );
}