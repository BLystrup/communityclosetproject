import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="col-md-2 mt-2">Store Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<GarmentList/>} path="/dashboard"/>
          <Route element={<GarmentForm/>} path="additem"/>
          <Route element={<OneGarment/>} path="view/:id"/>
          <Route element={<EditGarment/>} path="edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
