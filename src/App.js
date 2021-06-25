import { BrowserRouter as Router } from 'react-router-dom'

import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'


function App() {
  return (
    <Router>
      <Hero />
      <Navbar />
    </Router>
  );
}

export default App;
