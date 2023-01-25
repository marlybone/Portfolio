import './App.css'
import Navbar from './Components/Navbar'
import Social from './Components/Social'
import Content from './Components/Content'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function App() {
  return (
    <main>
      <Navbar/>
      <Content />
      <Social/>
      <Projects/>
      <Contact/>
    </main>
  )
}
