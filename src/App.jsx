import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './componets/signIn'
import Contacts from './componets/Contacts'


const App = () => {
  return (  
    
    <Router>
     <Routes>
       <Route path='/' element={<SignIn />} />
       <Route path='/contacts' element={<Contacts />} />
       {/* Add more routes here */}
     </Routes>
   </Router>
   
  );
}

export default App;