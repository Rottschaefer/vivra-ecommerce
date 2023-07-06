import GlobalStyle from "./GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductSlide } from "./components/ProductSlide/ProductSlide";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductSlide />
    </>
  );
}

export default App;
