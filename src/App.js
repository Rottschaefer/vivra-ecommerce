import GlobalStyle from "./GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductSlide } from "./components/ProductSlide/ProductSlide";
import { SlideTest } from "./components/ProductSlide/test/SlideTest";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <ProductSlide /> */}
      <SlideTest />
    </>
  );
}

export default App;
