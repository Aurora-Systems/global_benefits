import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="p_bg container-fluid">
            <div className="p-2 row  justify-content-center  align-items-center text-white">
                    <div className="col-sm text-center flex-column text-center d-flex justify-content-center mb-3">
                        <div>
                            

                         <p>Proud Partners</p>
                    <Image 
                        src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/yield_logo.png" 
                        alt="Yield For Finance Logo"
                        width={150}   
                        height={0}
                        className="img-fluid text-center"  
                    />
                                            </div>

                    </div>
                <div className="col-sm d-flex flex-column text-center">
                    <span className="fw-bold mb-2">Contact Details</span>
                    <Link href="mailto:info@globalbenefitspbc.co.zw">info@globalbenefitspbc.co.zw</Link>
                    <Link href="tel:+267 78 581 658">+267 78 581 658</Link>
                    <Link href="https://www.linkedin.com/company/global-benefits-pbc/">LinkedIn</Link>
                    <Link href="https://www.facebook.com/globalbenefitspbc">Facebook</Link>

                </div>
                
                <div className="col-sm d-flex flex-column text-center">
                <span className="fw-bold mb-2">Pages</span>
                    <Link href="/">Home</Link>
                    {/* <Link href="/about_us">About Us</Link> */}
                    <Link href="/services">Services</Link>
                    <Link href="/contact_us">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

