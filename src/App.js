import Header from './components/Header';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Assets from './components/Assets';
import Experience from './components/Experience';
import Magic from './components/Magic';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Main-section">
        <Header />
        <Hero />
      </div>
      <Services />
      <Assets />
      <Experience />
      <Magic />
      <Footer />
    </div>
  );
}

export default App;
