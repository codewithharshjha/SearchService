
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import LocationPage from "./Components/LocationPage/LocationPage"
import FarmingDrone from "./Components/FarmingDrone/FarmingDrone";
import FarmingRobot from "./Components/FarmingRobot/FarmingRobot";
import IndustrialRobot from "./Components/IndustrialRobot/IndustrialRobot";
import DomesticRobot from "./Components/DomesticRobot/DomesticRobot";
import ShopPages from "./Components/ShopPages/ShopPages";
import ProductPage from "./Components/ShopPages/ProductPages";
import AccountPage from "./Components/AccountPages/AccountPages";
import MenuPage from "./Components/MenuPages/MenuPages";
import AboutPage from "./Components/AboutPage/AboutPage";
import PrivacyPage from "./Components/PrivacyPage/PrivacyPage";
import RecallsPage from "./Components/RecallsPage/RecallsPage";
import ContactPage from "./Components/ContactPageAbove/ContactPages";
import NewsPage from "./Components/NewsPage/NewsPage";
import UpdatesPage from "./Components/UpdatesPage/UpdatesPage";
import Company from "./Components/Company/Company";

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/product/:productId" element={<Product />} />
<Route path="/cart/:product" element={<Cart />} />
<Route path="/location" element={<LocationPage/>} />
<Route path="/farmingdrone" element={<FarmingDrone/>} />
<Route path="/FarmingRobot" element={<FarmingRobot />} />
<Route path="/IndustrialRobot" element={<IndustrialRobot/>} />
<Route path="/DomesticRobot" element={<DomesticRobot/>} />
<Route path="/shop"  element={<ShopPages/>} />
<Route path="/shop/product/:productId" element={<ProductPage/>} />
<Route path="/Account" element={<AccountPage/>} />
<Route path="/Menu" element ={<MenuPage/>} />
<Route path="/about" element={<AboutPage/>} />
<Route path="/privacy" element={<PrivacyPage/>} />
<Route path="/recalls" element={<RecallsPage/>} />
<Route path="/contact" element={<ContactPage/>} /> {/* Add this route */}
<Route path="/news" element={<NewsPage/>} /> {/* Add this route */}
<Route path="/updates" element={<UpdatesPage/>} /> {/* Add this route */}
<Route path="/about" element={<Footer/>}/>
<Route path="/privacy" element={<Footer/>}/>
<Route path="/recalls" element={<Footer/>}/>
<Route path="/contact" element={<Footer/>}/>
<Route path="/news" element={<Footer/>}/>
<Route path="/updates" element={<Footer/>}/>
<Route path="/Account" element={<Footer/>}/>
<Route path="/company" element={<Company/>}/>




        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
