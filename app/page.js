import Navbar from './components/Navbar';
import Home_ from './components/Home';
import Stack from './components/Stack';
import About from './About/About';
import Projects from './components/Projects';
import Services from './components/Services';
import FAQ from './components/FAQ';
import GithubSection from './components/GithubSection';
import Contact from './Contact/Contact';
import BgAnimations from './components/BgAnimations';
import Chatbot from './components/Chatbot';
import Feedback from './components/Feedback';

export default function Home() {
  return (
    <>
    <Home_ />
    <GithubSection />
    <Stack />
    <About />
    <Chatbot />
    <Feedback />
    <Projects />
    <Services />
    <FAQ />
    <Contact />
    </>
  );
}
