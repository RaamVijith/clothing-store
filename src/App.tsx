import CategorySection from "./components/CategorySection"
import CategorySection2 from "./components/CategorySection2"
import Footer from "./components/Footer"
import HomeSlider from "./components/HomeSlider"
import Navbar from "./components/Navbar"
import OfficeLocations from "./components/OfficeLocations"
import ProductShowcase from "./components/ProductShowcase"
import ProductShowcaseWhite from "./components/ProductShowcaseWhite"
import SpringBanner from "./components/SpringBanner"
import TestimonialSlider from "./components/TestimonialSlider"

function App() {

  const officeLocations = [
    {
      city: "Madrid",
      address: [
        "Callejon de Jorge Juan 12",
        "28001 Madrid, Spain"
      ],
      phone: "+34 91 431 70 82",
      email: "esmee@example.com",
      imageUrl: "https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/H5-icon1.png"
    },
    {
      city: "Paris",
      address: [
        "2-8 Rue du Parc de",
        "Montsouris, Paris"
      ],
      phone: "+34 91 431 78 88",
      email: "esmee@example.com",
      imageUrl: "https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-icon2.png"
    },
    {
      city: "Amsterdam",
      address: [
        "Comfort Zone Holding",
        "B.V. Amsterdam"
      ],
      phone: "+34 91 431 78 34",
      email: "esmee@example.com",
      imageUrl: "https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-icon3.png"
    }
  ];

  return (
    <div className="bg-gray-100">
      <Navbar/>
      <HomeSlider/>
    <CategorySection/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ProductShowcase />
    </div>
    <TestimonialSlider/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ProductShowcaseWhite/>
    </div>
    <CategorySection2/>

    <OfficeLocations locations={officeLocations} />
    <SpringBanner/>
    <Footer/>
    </div>
    
  )
}

export default App
