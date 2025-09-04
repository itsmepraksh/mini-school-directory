
import {Route, Routes  } from "react-router-dom"
import AddSchool from "../pages/AddSchool" 
import Home from "../pages/Home"
import Working from "../pages/Working" 
import ShowSchools from "../pages/ShowSchool"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/addSchool" element={<AddSchool/>} />
        <Route path="/lost" element={<Working/>} /> 
        <Route path="/showSchool" element={<ShowSchools/>}/>
    </Routes>
  )
}

export default AppRouter