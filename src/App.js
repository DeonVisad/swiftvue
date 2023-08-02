import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Inquiry from './Components/Inquiry/Inquiry';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Reviews />
      {/* <Inquiry />
      <Footer /> */}
    </div>
  );
}

export default App;
