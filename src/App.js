import logo from './logo.svg';
import './App.css';
import Header from  './components/header'
import FirstCard from  './components/firstCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Header /> 
      </header>
      <main>
          <FirstCard/>
      </main>
    </div>
  );
}

export default App;
