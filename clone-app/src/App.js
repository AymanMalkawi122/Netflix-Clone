
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from "./components/Main/Main"
import FavList from "./components/FavList/FavList"
import NavBar from "./components/Navbar/Navbar";

function App() {
  let serverURL = process.env.REACT_APP_SERVER_URL;

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>

          <Route exact path='/' element={<Main url={serverURL} />}>
          </Route>

          <Route exact path='/FavList' element={<FavList url={serverURL} />}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
