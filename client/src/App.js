import './App.css';
import GarmentForm from './components/GarmentForm';
import GarmentView from './components/GarmentView';
import Dashboard from './components/Dashboard';
import EditGarment from './components/EditGarment';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<RegisterForm/>} path="/"/>
          <Route element={<LoginForm/>} path="/login"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
          <Route element={<GarmentForm/>} path="additem"/>
          <Route element={<GarmentView/>} path="view/:id"/>
          <Route element={<EditGarment/>} path="edit/:id"/>
          <Route element={<NotFound/>} path="*"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
