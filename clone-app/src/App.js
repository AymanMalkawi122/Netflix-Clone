
import './App.css';
import Main from "./components/Main/Main"
function App() {
let serverURL=process.env.REACT_APP_SERVER_URL;

  return (
    <div className="App">
  <Main url={serverURL}/>
    </div>
  );
}

export default App;
