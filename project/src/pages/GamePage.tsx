import Game from '../components/game/Game';
import { GameProvider } from '../components/context/GameContext';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;