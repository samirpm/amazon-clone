
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={[

            <Header />,
            <Home />
          ]}/>
          
          <Route path='/checkout' element={[
            <Header/>,
            <Checkout/>
          ]}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
