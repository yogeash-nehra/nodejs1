import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from "./components/SecondComponent";
function App() {
  return (
      <div className="App">
        <h1>Hello World</h1>
          <FirstComponent />
          <SecondComponent />
      </div>

  );
}

export default App;
