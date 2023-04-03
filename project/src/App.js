import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="/Aboutus" element={<Aboutus/>}/>
  <Route path="/Certifications"element={<Certifications/>}/>
  <Route path="/Experience"element={<Experience/>}/> 
  <Route path="/Hobbies"element={<Hobbies/>}/>
  <Route path="/Projects"element={<Projects/>}/>
  <Route path="/Qualifications"element={<Qualifications/>}/>
  <Route path="/Skills" element={<Skills/>}/>
</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
