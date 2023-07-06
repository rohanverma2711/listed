import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import SignIn from './components/SignIn';
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div className="App">

<Router>


    <Routes>
      
        <Route  exact path="/" element={<SignIn />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashBoard />} />
     
       
      </Routes>

      </Router>


      {/* <SignIn/> */}
      {/* <DashBoard/> */}
      
    </div>
  );
}

export default App;
