import { bg_img } from "../components/css_bg";
import Image from "next/image";
import Link from "next/link";
import services from "../db/services.json"
import { contact } from "../db/contact_info";

export default function Services(){
    return(
        <div>
            <div className="d-flex justify-content-center align-items-center min-vh-100" style={bg_img("https://ngratesc.sirv.com/Global%20Benefits%20PBC/2150152254.png")}>
                <div className="p_bg_opacity text-center text-white p-5  round">
                    <Image 
                        src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/logo.png"
                        width={200}
                        height={200}
                        alt="Global Benefits PBC logo" 
                        className="img-fluid"   
                    />
                    <h1 className="display-1">Services</h1>
                    <p>Secure Your Trade <br/> Expand Your <br/>Business</p>
                </div>
            </div>
            <div className="container">

            <div className="text-center">
                <h1 className="display-1">
                    Comprehensive Trade Finance Solutions Tailored To Your <b>Needs</b>
                </h1>
                <p>
                At <b>Global Benefits PBC</b>, we offer a wide range of trade finance services designed to help businesses manage the complexities and risks associated with international trade. Our solutions are crafted to facilitate smooth, secure, and efficient transactions while providing you with the confidence and peace of mind that your financial interests are protected. Each of our services can be customized to suit your unique trade requirements, ensuring your business has the flexibility it needs to grow and succeed in global markets.
                </p>
            </div>
           <div>
            {
                services.map((item)=>{
                    return(
                        <div className="min-vh-100" key={item.service}>
                            <div className="row">
                                <div className="col-sm mb-3">
                                    <Image 
                                        src={item.img} 
                                        height={0}
                                        width={800}
                                        className="img-fluid w-100 h-100"
                                        alt="service image"
                                    />
                                </div>
                                <div className="col-sm mb-3">
                                    <h1 className="display-1 p_text">{item.service}</h1>
                                    <p>{item.def}</p>
                                    <p className="fw-bold p_text">{item.why}</p>
                                    <ul>
                                        {
                                            item.points.map((i)=>{
                                                return(
                                                    <li key={i}>{i}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p>{item.extras}</p>
                                    <Link href={`https://wa.me/${contact}?text=Good day can I get more information about ${item.service}`}><button type="button" className="btn p_btn text-white">Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }) 
            }
           </div>
            </div>

        </div>
    )
}