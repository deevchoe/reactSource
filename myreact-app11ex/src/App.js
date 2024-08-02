import './App.css';
import Multab from './exam/Multab';
import Jikwon from './exam/Jikwon';
import Gugudan from './exam/Gugudan';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navi from './css/Nav.css';
function App() {
  return (

    <Router>
      <div className='App'>
        <h2>라우팅 Exam 🤓</h2>
        
        <nav className='navbar' style={Navi}>
          <Link className="navbarMenu" to="/" >메인</Link> | 
          <Link className="navbarMenu" to="gugu">구구단</Link> | 
          <Link className="navbarMenu" to="jikwon">직원정보</Link>
          <Link className="navbarMenu" to="3gu">3구단</Link>
        </nav>
        <Routes>
          <Route path="/gugu" element={<Multab/>}/>
          <Route path="/jikwon" element={<Jikwon/>}/>
          <Route path="/3gu" element={<Gugudan/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
