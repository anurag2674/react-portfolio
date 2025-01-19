import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 left-0">
        <Header />
      </div>
      <div className="flex-1 mt-16">
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
