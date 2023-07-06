import Footer from './component/common/Footer/Footer';
import Header from './component/common/Header/Header';
import Home from './pages/Home/Home';
import './style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
function App() {
  AOS.init();

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
