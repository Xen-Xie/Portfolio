import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './lib/utlities/fontawesome';
import Layout from './Components/Layout';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Projects from './assets/Pages/Projects';
import Resume from './assets/Pages/Resume';
import Contact from './assets/Pages/Contact';

function App() {
  return (
    
      <Routes>
        {/* The parent route that includes Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes that will be rendered inside the Layout via <Outlet /> */}
          <Route index element={<Home />} /> {/* This will render Home at the root */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    
  );
}

export default App;
