import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/main";
import { ProductSection } from "./components/product-section";
import { Footer } from "./components/footer";
import { FAQ } from "./components/FAQ";


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
