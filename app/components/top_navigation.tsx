"use client"
import Image from "next/image"
import Link from "next/link"
export default function TopNavigation(){
    return(
        <div>

        
        <div className="d-flex justify-content-between text-white p_bg p-2" >
            <div className="d-flex flex-wrap gap-1 ">
                <span><small><i className="bi bi-envelope"/> info@globalbenefitspbc.co.zw</small></span>
                <span><small><i className="bi bi-telephone"/> +267 78 581 658</small></span>
            </div>
            <div className="d-flex flex-row flex-nowrap gap-1">
                <a href="https://linkedin.com/globalbenefitspbc" target="_blank" rel="noreferrer" ><i className="bi bi-linkedin text-white"/></a>
                <a href="https://instagram.com/globalbenefitspbc" target="_blank" rel="noreferrer"><i className="bi bi-instagram text-white"/></a>
                <a href="https://facebook.com/globalbenefitspbc" target="_blank" rel="noreferrer"><i className="bi bi-facebook text-white"/></a>
            </div>
        </div>
        <div className="" style={{height:"5px"}}>
           
        </div>
        <div className="p_bg p-2 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
                <Image 
                    src={"https://ngratesc.sirv.com/Global%20Benefits%20PBC/logo.png"}
                    alt="Global Benefits Logo"
                    className="img-fluid"
                    width={50}
                    height={0}
                />
                <span className="text-white">Global Benefits PBC</span>
            </div>
            <div >  
               
                <Link href="tel:+26778581658"><button type="button" className="btn btn-light">Call Us</button></Link>
            </div>
        </div>
        </div>
    )
}