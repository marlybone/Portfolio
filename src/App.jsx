import './App.css'
import Navbar from './Components/Navbar'
import Social from './Components/Social'
import Content from './Components/Content'
import Projects from './Components/Projects'

export default function App() {
  return (
    <main>
      <Navbar/>
      <Content />
      <Social/>
      <Projects/>
    </main>
  )
}
