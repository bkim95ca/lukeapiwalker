import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>LukeSkywalker API</h1>
      <Link to={"/"}>Home</Link>
      <hr />
      <Form />
      <Routes>
        <Route path='/:swItem/:swId' element={<Display />}/>
      </Routes>
    </div>
  );
}

export default App;
