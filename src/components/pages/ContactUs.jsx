import ContactContent from "../contact-us/ContactContent";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const ContactUsPage=()=>{
    return(
        <div className="bg-white">
            <Header/>
            <ContactContent/>
            <Footer/>
        </div>
    )
}

export default ContactUsPage;