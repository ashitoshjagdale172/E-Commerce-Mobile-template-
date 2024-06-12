import Navbar from "../Home/Navbar"
import Header from"../Home/Header"
import Sale from "../Home/Sale"
import HomeAbout from "../Home/HomeAbout"
import ChooseUS from "../Home/ChooseUS"
import Footer from "../Home/Footer"
const HomeLayout = () => {
  return (
    <div>
         <Navbar/>
     <Header/>
     <Sale/>
     <HomeAbout/>
     <ChooseUS/>
     <Footer/>
    </div>
  )
}

export default HomeLayout
