
import BottomNavbar from "@/components/BottomNavbar";
import Card from "@/components/Card";
import CounterPage from "@/components/CounterPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import ProductCard from "@/components/ProductCard";
// import Slider from "@/components/Slider";
import Stats from "@/components/Stats";
import Topnavbar from "@/components/Topnavbar";
export default function page() {
  return (
    <div>
      <Topnavbar />
      <Navbar /> 
      
      <BottomNavbar/>
      <CounterPage/>
      {/* <Slider /> */}
      <div className="bg-zinc-100">

      </div>
      {/* <Card/> */}
      <Stats/>
      <Footer /> 
    </div>
  );
}