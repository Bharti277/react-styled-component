import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import store from "./store/store";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
