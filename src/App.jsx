import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './animations/JapaneseStyles.css'

import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx'
import WhyLearnJapanese from './components/WhyLearnJapanese.jsx'
import HowItWorksPage from './components/HowItWorksPage.jsx'
import SpeakJapanesePage from './components/SpeakJapanesePage.jsx'
import StudentSuccessStories from './components/StudentSuccessStories.jsx'
import SakuraPetals from './animations/SakuraPetals.jsx'
import FAQSection from './components/FAQSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import HeroPage from './components/FloatingDockLayout.jsx'
import FloatingDockLayout from './components/FloatingDockLayout.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import OurCourses from './components/OurCourses.jsx'
import CoursesPricing from './components/CoursesPricing.jsx';
import JourneyCTA from './components/JourneyCTA.jsx';
import Footer from './components/Footer.jsx';
import WhyFledgeAcademy from './components/WhyFledgeAcademy.jsx';
import AboutPage from './components/AboutPage.jsx';
import CoursesPage from './components/CoursesPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <WhatsAppWidget />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={
            <>
              <FloatingDockLayout/>
              <WhyLearnJapanese/>
              <HowItWorksPage/>
              
              <OurCourses/>
              <WhyFledgeAcademy/>
              <StudentSuccessStories/>
              <FAQSection/>
              <JourneyCTA/>
              <Footer/>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/CoursesPricing" element={<CoursesPricing/>} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App
