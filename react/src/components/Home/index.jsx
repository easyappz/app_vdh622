import React from 'react'
import Header from '../Header/index.jsx'
import Hero from '../Landing/Hero.jsx'
import About from '../Landing/About.jsx'
import Benefits from '../Landing/Benefits.jsx'
import ContactInfo from '../Landing/ContactInfo.jsx'
import Socials from '../Landing/Socials.jsx'
import FeedbackForm from '../Landing/FeedbackForm.jsx'
import Footer from '../Footer/index.jsx'

export default function Home() {
  return (
    <div data-easytag="id1-src/components/Home/index.jsx">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <ContactInfo />
      <Socials />
      <FeedbackForm />
      <Footer />
    </div>
  )
}
