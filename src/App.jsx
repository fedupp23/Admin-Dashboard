import { Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import ProductPage from "./Pages/ProductPage";
import Sidebar from "./components/Sidebar";
function App() {

return (
  
  <div className="flex h-screen bg-gray-800 text-gray-300 overflow-hidden">

  {/**background */}
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 opacity-80" />
      
    <div className="absolute inset-0 backdrop-blur-sm"/>
  </div>


  <Sidebar />
    <Routes>
    <Route path="/" element={<OverviewPage />} />
    <Route path="/product" element={<ProductPage />} />
  </Routes>
  </div>
  
)
}

export default App
