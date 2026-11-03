import {ThemeProvider} from './src/contexts/theme/ThemeContext';
import MainApp from './src/app/MainApp';
import { Provider } from "react-redux";
import { persistor, store } from "@/store/index";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <Provider store={store}>
      {/* makes the app waits for Redux rehydration before rendering its children */}
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <MainApp/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}