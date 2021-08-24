
import './App.css';
import Navbaar from './comComponents/navbar/index';
import About from './about/about';
import Slider from './slider/slider';
import Contents from './centerContent/contents';
import CenterVideo from './centerVideo/centerVideo';
import Blog from './blog/blog';
import Colaborating from './colaborating/colaborating';
import Footer from './comComponents/footer/footer';

function App() {
  return (
    <div >
     <Navbaar />
     <About />
     <Slider />
     <Contents />
     <CenterVideo />
     <Blog />
     <Colaborating />
     <Footer />
    </div>
  );
}

export default App;
