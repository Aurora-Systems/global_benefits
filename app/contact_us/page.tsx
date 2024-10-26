/* eslint-disable @typescript-eslint/no-explicit-any */
"use client" 
import emailjs from "@emailjs/browser"
import { useState, useRef, type FormEvent } from "react"

export default function ContactUs(){
    const [loading,set_loading] = useState<boolean>(false)
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const form:any = useRef(null);
    const sendEmail = (e:FormEvent) => { 
    e.preventDefault();
    set_loading(true)
    emailjs
      .sendForm('service_mw28sna', 'template_f1i853i', form.current, {
        publicKey: 'NWIUjdwgpeRMKAyGZ',
      })
      .then(
        () => {
          alert('Message Sent');
          form.current.reset()
        },
        (error) => {
            alert("Failed To Send Message")
            console.log(error)
        },
      ).finally(()=>{
        set_loading(false)
      })
  };
    return(
        <div>
            <h1 className="display-1 text-center p_text">
                Get In Touch
            </h1>
            <div className="d-flex flex-row justify-content-center gap-2 text-center">
                <p className="text-center">Send Us A Message And We Will Get Back To You Shortly</p>
            </div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-sm mb-3">
                            <span>Full Name</span>
                            <input type="text" name="full_name" required className="form-control"/>
                        </div>
                        <div className="col-sm mb-3">
                            <span>Email</span>
                            <input type="email" name="email" required className="form-control"/>
                        </div>
                        <div className="col-sm mb-3">
                            <span>Contact Number</span>
                            <input type="tel" name="contact_number" required className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm mb-3">
                            <span>Your Message</span>
                            <textarea className="form-control" name="message" required>

                            </textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm">
                            <button type="submit" disabled={loading} className="btn p_btn text-white">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}