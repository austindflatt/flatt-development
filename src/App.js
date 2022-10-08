import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderMenu from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/PortfolioPage';
import Services from './pages/ServicesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import WebDevPage from './pages/WebDevPage';
import MobileDevPage from './pages/MobileDevPage';
import ElectronPage from './pages/ElectronPage';
import UIPage from './pages/UIPage';
import NodePage from './pages/NodePage';
import ReactPage from './pages/ReactPage';
import MongodbPage from './pages/MongodbPage';
import TypescriptPage from './pages/TypescriptPage';
import VuePage from './pages/VuePage';
import NextjsPage from './pages/NextjsPage';
import AwsPage from './pages/AwsPage';
import ReduxPage from './pages/ReduxPage';

function App() {

  return (
    <Router>
      <ScrollToTop>
        {/* <AlertMessage /> */}
        <HeaderMenu />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/cases' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/web-development' element={<WebDevPage />} />
            <Route path='/services/mobile-development' element={<MobileDevPage />} />
            <Route path='/services/electron' element={<ElectronPage />} />
            <Route path='/services/ux-ui-design' element={<UIPage />} />
            <Route path='/services/node-js' element={<NodePage />} />
            <Route path='/services/react' element={<ReactPage />} />
            <Route path='/services/redux' element={<ReduxPage />} />
            <Route path='/services/typescript' element={<TypescriptPage />} />
            <Route path='/services/vue' element={<VuePage />} />
            <Route path='/services/next-js' element={<NextjsPage />} />
            <Route path='/services/aws' element={<AwsPage />} />
            <Route path='/services/mongodb' element={<MongodbPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;