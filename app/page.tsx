import { bg_img } from "./components/css_bg"
import Link from "next/link"
import Image from "next/image"
export default function Home(){
  return(
    <div >
      <div className="min-vh-100 d-flex justify-content-center align-items-center" style={bg_img("https://ngratesc.sirv.com/Global%20Benefits%20PBC/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas%201.png")}>
        <div className="text-center text-white  p-3  ">
            <div className="p_bg_opacity">
            <Image 
            src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/logo.png" 
            alt="Global Benefits Logo" 
            width={200}
            height={0}
            className="img-fluid"
          />
          <h1 className="display-1">Global Benefits PBC</h1>
          <p>Expert Trade Financial Solutions</p>
          <div className="pb-5">
          <Link href="/services"><button type="button" className="btn btn-light">Find Out More</button></Link>

          </div>
        
            </div>
        </div>
      </div>
    </div>
  )
}