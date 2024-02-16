import './App.css'
import FeatureCard from './components/featurecard/FeatureCard'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Facts from './components/facts/Facts'
import OurTeam from './components/skilled/OurTeam'
import Testimonials from './components/testimonials/Testimonials'
import News from './components/news/News'
import Clients from './components/clients/Clients'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
    <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id='features' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <FeatureCard />
        </div>
      </section>
      <section id='portfolio' className='bg-slate-50 mt-20	'>
        <div className=' mx-auto max-w-[1340px]'>
         <Portfolio />
        </div>
      </section>
      <section id='facts' className='py-10 dark:bg-gray-600 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <Facts />
        </div>
      </section>
      <section id='team' className='py-10 bg-gray-100 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <OurTeam />
        </div>
      </section>


      <section id='testimonials' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <Testimonials/>
        </div>
      </section>
      <section id='news' className='bg-slate-50 mt-20'>
        <div className=' mx-auto max-w-[1340px]'>
          <News />
        </div>
      </section>
      <section id='clients' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <Clients />
        </div>
      </section>

      <section id='footer' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
       <Footer/>
        </div>
      </section>
    </>
  )
}

export default App
