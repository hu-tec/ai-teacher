import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import RegistrationGuide from './pages/guide/RegistrationGuide';
import AcademicCalendar from './pages/guide/AcademicCalendar';
import CourseBenefits from './pages/guide/CourseBenefits';
import TuitionRefund from './pages/guide/TuitionRefund';
import Certificates from './pages/guide/Certificates';
import Community from './pages/Community';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        
        {/* Course Guide Sub-pages */}
        <Route path="/guide/registration" element={<RegistrationGuide />} />
        <Route path="/guide/schedule" element={<AcademicCalendar />} />
        <Route path="/guide/benefits" element={<CourseBenefits />} />
        <Route path="/guide/refund" element={<TuitionRefund />} />
        <Route path="/guide/certificates" element={<Certificates />} />

        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
