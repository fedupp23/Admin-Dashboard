import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS=[
{
    name:"Overview",
    href:"/",
    icon: BarChart2,
    color:"#6366f1",

},
{
    name:"Products",
    icon:ShoppingBag,
    href:"/product",
    color:"#885CF6",

},
{
    name:"Users",
    icon:User,
    href:"/users",
    color:"#EC4899",

},
{
    name:"Sales",
    icon:DollarSign,
    href:"/sales",
    color:"#34D36F",

},
{
    name:"Orders",
    icon:ShoppingCart,
    href:"/orders",
    color:"mustard",

},{
    name:"Analytics",
    icon:TrendingUp,
    href:"/analytics",
    color:"#3882F6",

},{
    name:"Settings",
    icon:Settings,
    href:"/settings",
    color:"#F8312F",
}
]

const Sidebar = () => {
  const [issideBarOpen,setIsSideBaropen]=useState(true);
  return(
    
    <motion.div
    className={`relative z-11 transition-all duration-300 ease-in-out flex-shrink-0 ${issideBarOpen ? 'w-64':'w:20'}`}
    animate={{width:issideBarOpen?256:80}}
    >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 ">
           <motion.button
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           onClick={()=> setIsSideBaropen(!issideBarOpen)}
           className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
           >
            <Menu size={24} />
            </motion.button> 
            <nav className="mt-8 flex-grow">
                {SIDEBAR_ITEMS.map((item)=>(
                    <Link key={item.href} to={item.href}>
                    <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                        <item.icon size={20} style={{color:item.color,minWidth:"20px"}}  />
                    </motion.div>
                </Link>
                ))}
            </nav>
        </div>
    </motion.div>
    
  )
}
export default Sidebar