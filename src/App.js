import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
