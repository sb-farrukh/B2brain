
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='main-bar'>
      <Navbar/>
      </div>
     <div className='main-side'>
     <Sidebar/>
     </div>
    
    </div>
  );
}

export default App;
