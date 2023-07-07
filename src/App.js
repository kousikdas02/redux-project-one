import { ToastContainer } from 'react-toastify';
import Footer from './component/common/Footer/Footer';
import Header from './component/common/Header/Header';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import './style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog/Blog';

AOS.init();
function App() {
  AOS.init();

  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />s
          <Route path='/blog' element={<Blog />} />s
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
