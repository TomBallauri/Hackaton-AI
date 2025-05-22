import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import InstructionGame from './pages/InstructionGame';
import MediaPreloader from './components/MediaPreloader';
import Ending from './pages/Ending';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MediaPreloader />
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instruction" element={<InstructionGame />} />
          <Route path="/end" element={<Ending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;