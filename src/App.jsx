import logo from './logo.svg';
import './App.css';
import SimpleComponent from './SimpleComponents.jsx';
import data from './data.jsx'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {data.map((item, index) => (
                    <SimpleComponent key={index} {...item} />
                ))};
        </ul>
      </header>
    </div>
  );
}
