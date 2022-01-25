import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';


const App=()=> {
  return(
  <Router>
   <Routes>
     <Route path="/"  element={<Register/>}/>
     <Route path="/login" element={<Login />}/>
   </Routes>
 </Router>
  )
}

export default App;
