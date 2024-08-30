import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, User } from "lucide-react"

const SIDEBAR_ITEMS=[
{
    name:"Overview",
    icon:BarChart2,
    color:"#6366f1",
    path:"/",

},
{
    name:"Products",
    icon:ShoppingBag,
    color:"#885CF6",
    href:"/product",

},
{
    name:"Users",
    icon:User,
    color:"#EC4899",
    href:"/users",

},
{
    name:"Sales",
    icon:DollarSign,
    color:"#10B981",
    href:"/sales",

},
{
    name:"Orders",
    icon:ShoppingCart,
    color:"#F59E0B",
    href:"/orders",

},{
    name:"Analytics",
    icon:TrendingUp,
    color:"#3882F6",
    href:"/analytics",

},{
    name:"Settings",
    icon:Settings,
    color:"#6EE787",
    href:"/settings",

}
]





const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar