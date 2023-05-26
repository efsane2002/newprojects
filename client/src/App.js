import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Pages from "./pages/Pages";
import Plan from "./pages/Plan";
import Schedule from "./pages/Schedule";
import Trainer from "./pages/Trainer";
import Course from "./pages/Course";
import Add from "./pages/Add";
import { SiteContextProvider } from "./context/SiteContext";

function App() {
  return (
    <>
    <SiteContextProvider>
      <Navbar></Navbar>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/offer" element={<Offer/>}/>
       <Route path="/pages" element={<Pages/>}/>
       <Route path="/plan"element={<Plan/>}/>
       <Route path="/schedule" element={<Schedule/>}/>
       <Route path="/trainer" element={<Trainer/>}/>
       <Route path="/course" element={<Course/>}/>
       <Route path="/add" element={<Add/>}/>

       </Routes>
       </SiteContextProvider>
    </>
  );
}

export default App;
