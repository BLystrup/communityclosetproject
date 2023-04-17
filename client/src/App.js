import './App.css';
import GarmentForm from './components/GarmentForm';
import GarmentView from './components/GarmentView';
import Dashboard from './components/Dashboard';
import EditGarment from './components/EditGarment';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Login/>} path=""/> */}
          <Route element={<Dashboard/>} path="/dashboard"/>
          <Route element={<GarmentForm/>} path="additem"/>
          <Route element={<GarmentView/>} path="view/:id"/>
          <Route element={<EditGarment/>} path="edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
