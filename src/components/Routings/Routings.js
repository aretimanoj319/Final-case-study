import { Route, Routes } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";
import ComingSoon from "../ComingSoon/ComingSoon";
import Contactus from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Jobs from "../Jobs/Jobs";
import Navbar from "../Navbar/Navbar";
const Routings = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applyjob/:id" element={<ApplyJob />} />
        <Route path="comingsoon" element={<ComingSoon />} />        
      </Routes>
    </>
  );
};
export default Routings;
