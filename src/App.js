import './App.css';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/hero';
import Join from './components/Join/join';
import Plans from './components/Plans/plans';
import Programs from './components/Programs/programs';
import Reasons from './components/Reasons/reasons';
import Testimonials from './components/Testimonials/testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
