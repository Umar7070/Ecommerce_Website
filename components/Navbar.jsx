'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

const links =[
    {
        name:'home',
        path:'/'
    },
    {
        name:'about',
        path:'/about'
    },
    {
        name:'contact',
        path:'/contact'
    },
    {
        name:'product',
        path:'/product'
    },
   
]
const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <div className="container flex gap-6 mt-8">
        {
            links.map((curEle,index)=>{
                return(
                    <Link href={curEle.path} className="capitalize text-sm" >{curEle.name}</Link>
                )
            })
        }
    </div>
      
    </>
  )
}

export default Navbar
