
import BottomNavbar from "@/components/BottomNavbar";
import CounterPage from "@/components/CounterPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Topnavbar from "@/components/Topnavbar";
export default function page() {
  return (
    <div>
      <Topnavbar />
      <Navbar /> 
      <BottomNavbar/>
      <CounterPage/>
      <div className="bg-zinc-100">

      </div>
      <Footer /> 
    </div>
  );
}