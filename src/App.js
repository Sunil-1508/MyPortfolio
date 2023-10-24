import MyNavbar from './components/MyNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import logoImg from './assets/logo.png';
import pic from './assets/pic.png';
import resume from './assets/myResume.pdf';


function App() {
  return (
  <>
  <MyNavbar logo={logoImg} Title=" Sunil Noolu" button={resume}  btnName="Resume" />
  <About Name="Sunil" button1='https://www.linkedin.com/in/sunil-noolu/'  button2='https://www.github.com/Sunil-1508' btnName1="Connect"  btnName2="GitHub" image={pic} />
  <Projects />
  <Skills />
  <Certifications />
  <Contact />
  </>

  )};

export default App;
