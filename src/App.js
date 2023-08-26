
import Header from './Header'
import About from './About'
import Welcome from './Welcome'
import Special from './Special'
import Testimonial from './Testimonial'
import Footer from './Footer'



function App() {
  return (
   <>
     <body>
     <Header />
       <main>
      <Welcome />
      <Special />
      <Testimonial />
      <About />
       </main>
   <Footer />
   </body>
   </>
  )
}

export default App