import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from "./components/SecondComponent";
import Decision from "./components/Decision";
import Loop from "./components/Loop";
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from "./components/Menubar";
function App() {
  return (

      <div className="App">
          <Menubar/>
        <h1>Hello World</h1>
          <FirstComponent />
          <SecondComponent name="John" age="38"/>
          <Decision temp={4}/>
          <Loop names={["A", "B", "C"]}/>
          <Form/>
      </div>

  );
}

export default App;
