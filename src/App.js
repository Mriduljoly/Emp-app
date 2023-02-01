
import './App.css';
import EmpDboard from './Components/EmpDboard';
import EmpForm from './Components/EmpForm';
import {BrowserRouter, Route,Routes,Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <>
  <Routes>
    <Route path='/empdboard' element={<EmpDboard />}></Route>
   <Route path='/empform' element={<EmpForm />}></Route>
   <Route path='/' element={<App/>}></Route>
  </Routes>
 
  </>
   );
}

export default App;
