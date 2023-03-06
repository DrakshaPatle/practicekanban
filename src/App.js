import logo from './logo.svg';
import './App.css';

function App() {
  return 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>

      <Route path="dashboard" element={<Dashboard/>}/>
      
    </Route>

  </Routes>
</BrowserRouter>
}

export default App;
