import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Inquiry from './Components/Inquiry/Inquiry';
import Footer from './Components/Footer/Footer';
import InfoBanner from './Components/InfoBanner/InfoBanner';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Home />
      <Reviews />
      <InfoBanner />
      <Inquiry />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
