import { EditorPick } from "../components/EditorPick/EditorPick";
import { Header } from "../components/Header/Header";
import { ProductSlide } from "../components/ProductSlide/ProductSlide";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ProductSlide />
      <EditorPick />
    </>
  );
};
