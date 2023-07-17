import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
