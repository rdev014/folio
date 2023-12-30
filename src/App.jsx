import { BrowserRouter } from "react-router-dom"

import{About, Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'

const App=()=> {
  

  return (
    <>
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <Navbar/>
        <Hero/>
      </div>
<About/>
<Experience/>
<Tech/>
<Works/>
<Feedbacks/>
    </div>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
    
    </BrowserRouter>
       
    </>
  )
}

export default App
