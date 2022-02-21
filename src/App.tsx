import './App.css';
import MusicContainer from './components/MusicContainer/MusicContainer';
import MusicProgressBar from './components/MusicProgressBar/MusicProgressBar';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title></Title>
     <MusicContainer></MusicContainer>
    </div>
  );
}

export default App;
