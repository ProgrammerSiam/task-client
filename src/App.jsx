
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import {  Outlet} from "react-router-dom";
function App() {

  return (
   <>
   <Navbar></Navbar>
   <Outlet></Outlet>
   </>
  )
}

export default App