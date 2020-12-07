import logo from './logo.svg';
import './App.css';
import ReactCreateElement from './react.createelement';
import ReactComponent from './react.component';
import ReactPureComponent from './react.purecomponent';

function Greeting({value})
{
  return <h4>{value}</h4>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Types of components creation:
        </p>
        <ul>
            <li><ReactCreateElement/></li>
            <li><ReactComponent/></li>
            <li><ReactPureComponent/></li>
            <li><Greeting value={'Hello World!'}/></li>
          </ul>
      </header>
    </div>
  );
}

export default App;
