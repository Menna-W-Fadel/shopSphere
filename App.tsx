import { ThemeProvider } from "./src/contexts/theme/ThemeContext";
import MainApp from "./src/app/MainApp";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import CartPersistance from "@/services/cart/components/CartPersistance";
export default function App() {
  return (
    <Provider store={store}>
      <CartPersistance>
        <ThemeProvider>
          <MainApp />
        </ThemeProvider>
      </CartPersistance>
    </Provider>
  );
}
