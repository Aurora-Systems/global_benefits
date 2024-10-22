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
      <div className="container">
        <div className="row p-3">
          <div className="col-sm rounded" style={bg_img("https://ngratesc.sirv.com/Global%20Benefits%20PBC/20997.png")} >
           
          </div>
          <div className="col-sm">
            <h1 className="display-1 p_text">
              Your Trusted Finance <b>Partner</b>
            </h1>
            <p>
            At Global Benefits PBC, we understand the complexities of international trade and the financial risks businesses face when operating in a global market. That&apos;s why we offer tailored trade finance solutions that empower businesses to expand confidently, knowing they have the right financial backing to navigate international transactions. Whether you&apos;re an importer, exporter, or a business partner facilitating trade, we provide the financial instruments you need to succeed.
            </p>
            <p>
            Our services range from Letters of Credit at Sight to Performance Guarantees, all designed to minimize risk, ensure compliance, and enhance trust between trade partners. With our global expertise and industry knowledge, we are committed to helping you achieve seamless and secure cross-border transactions.
            </p>
          </div>
        </div>
        <div>
          <h1 className="display-1 p_text text-center fw-bold">Services</h1>
        <div className="row mb-5">
          <div className="col-sm text-center mb-3">
            <div className="card p_bg text-white p-2">
              <Image 
                src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/148087%201.png"
                width={400}
                height={0} 
                alt="service picture"
                className="card-img-top img-fluid"
              />
              <div className="p_bg">

              <p className="fw-bold">Letters of Credit</p>
              <p>Deferred payment solutions, giving your business more flexibility to manage cash flow while safeguarding trade deals.</p>
              </div>

            </div>
          </div>
          <div className="col-sm text-center mb-3">
          <div className="card p_bg text-white p-2">
              <Image 
                src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/2147768593%201.png"
                width={400}
                height={0} 
                alt="service picture"
                className="card-img-top img-fluid"
              />
              <div className="p_bg">

              <p className="fw-bold">Bank Guarantees</p>
              <p>Ensure all contractual obligations are met, providing security and peace of mind for both parties in the trade.</p>
              </div>

            </div>
          </div>
          <div className="col-sm text-center mb-3">
          <div className="card p_bg text-white p-2">
              <Image 
                src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/14722%201.png"
                width={400}
                height={0} 
                alt="service picture"
                className="card-img-top img-fluid"
              />
              <div className="p_bg">

              <p className="fw-bold">POF & RWA Messages</p>
              <p>We offer assurance to your trade partners with confirmations of your company’s readiness </p>
              </div>

            </div>
          </div>
        
        </div>
        <div className="text-center mb-5">
          <Link href="/services"><button className="btn p_btn text-white" type="button">View All Services</button></Link>
        </div>
        </div>
        <div className="text-center mb-5">
          <div>
            <h1 className="display-1 p_text">What Makes Us <b>Different</b>?</h1>
          </div>
          <div className="row gap-3">
            <div className="col-sm  mb-3">
            <div className="card  text-white  p_bg">
              <h1 className="display-1"><i className="bi bi-star-fill"/></h1>
              <p className="fw-bold">Unmatched Expertise</p>
              <p>With years of experience in the trade finance industry, our team offers expert guidance and support at every stage of the transaction process. From structuring complex Letters of Credit to advising on Bank Guarantees, we ensure that our clients have the right solutions to meet their unique needs.</p>
            </div>
            </div>
            <div className="col-sm  mb-3 ">
              <div className="card  text-white  p_bg">
              <h1 className="display-1"><i className="bi bi-globe"/></h1>
              <p className="fw-bold">Global Reach</p>
              <p>Whether you’re trading within your region or across continents, our network of international financial partners allows us to facilitate smooth and secure transactions, regardless of location. Our services are backed by a deep understanding of global trade practices and regulations.</p>
            
              </div>
              </div> 
            <div className="col-sm  mb-3">
            <div className="card  text-white  p_bg">
              <h1 className="display-1"><i className="bi bi-tools"/></h1>
              <p className="fw-bold">Customized Solutions</p>
              <p>No two businesses are alike, and neither are their trade financing requirements. We work closely with our clients to design and deliver customized solutions that align with their specific business goals and market dynamics. Our experts will help you process all your needs in a secure and efficient manner</p>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm text-center text-md-start">
            <h1 className="display-1 p_text">
              Why Choose <b>Global Benefits PBC</b>
            </h1>
            <p>
            In today’s fast-paced global market, having a reliable trade finance partner is crucial. At Global Benefits PBC, we combine our financial acumen with a client-centric approach, ensuring your business receives the right level of support at all times. Our solutions not only mitigate the financial risks associated with global trade but also unlock new opportunities for growth and expansion.

            </p>
            <p>With us, you’re not just accessing finance; you’re building lasting relationships with a partner that understands your business and is committed to seeing you succeed. Every transaction, whether large or small, is treated with the highest level of professionalism and care. We stand by our commitment to offer secure, transparent, and competitive trade finance services that add value to your business.
            </p>
          </div>
          <div className="col-sm" >
            <Image src="https://ngratesc.sirv.com/Global%20Benefits%20PBC/huge_logo.png" className="img-fluid" width={800} height={0} alt="Global benefits big logo"/>
          </div>
        </div>
        <div className="text-center mb-5">
         <div>
          <h1 className="display-1 p_text"> Our <b>Partners</b></h1>
          <p className="fw-bold p_text">Building Success Through Collaboration</p>
          <p>
          At Global Benefits PBC, we believe that strong partnerships are the foundation of our success. Over the years, we have built relationships with a diverse network of trusted partners who share our commitment to excellence in trade finance. These partnerships allow us to deliver world-class financial solutions and provide our clients with the resources they need to thrive in global markets.
          Below is a list of our valued partners who contribute to our mission of facilitating seamless and secure international trade. Together, we are shaping the future of global commerce.
          </p>
          <Link href="/become_a_partner"><button type="button" className="btn p_btn text-white">Become A Partner</button></Link>
         </div>
        </div>

      </div>
    </div>
  )
}