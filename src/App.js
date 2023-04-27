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
import FaqPage from './pages/FaqPage';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';
import Process from './pages/Process';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <Router>
      <ScrollToTop>
        {/* <AlertMessage /> */}
        <HeaderMenu />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/start-project' element={<Contact />} />
            <Route path='/work' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/process' element={<Process />} />
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/terms-conditions' element={<Terms />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        <Footer />
      </ScrollToTop>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </Router>
  );
}

export default App;