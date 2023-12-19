import "./App.css";
import Button from "./components/common/button"
import {Header, MainContent, Footer, ProductSection, FAQ} from "./components/WebSection"

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
      <Button />
    </>
  );
}

export default App;
