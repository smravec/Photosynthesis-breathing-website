import './App.css';
import HomePage from './components/HomePage';
import DemoPage from './components/DemoPage';


import {Route, Routes} from "react-router-dom"



export default function App() {
  return(
    <Routes>

      <Route path="/" element= {<HomePage/>}></Route>
      <Route path="/demo" element= {<DemoPage/>}></Route>
      <Route path="/learn" element= {<p>learn</p>}></Route>
      <Route path="/quiz" element= {<p>quiz</p>}></Route>

    </Routes>
  )
    
}

