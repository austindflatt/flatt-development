import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderMenu from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';

function App() {

  return (
    <Router>
      <ScrollToTop>
        {/* <AlertMessage /> */}
        <HeaderMenu />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/terms-conditions' element={<Terms />} />
          </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;