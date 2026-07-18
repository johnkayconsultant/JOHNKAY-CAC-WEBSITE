import { Link } from "react-router-dom";
import Button from "./ui/Button";
import BackgroundPattern from "./BackgroundPattern";
const CTASection=()=>{
    return(
       
        <section className="py-23 overflow-hidden bg-gray-900">
           <BackgroundPattern/>
          <div className="relative z-10">
            <div className="max-4-xl mx-auto text-center">
                <h3 className="uppercase text-blue-500 text-3xl md:text-4xl"> are you ready {" "}<span className="upper case"> to register your busines</span></h3>
                <p className="text-lg text-cream/70 mb-10 max-w-2xl mx-auto text-white">
            Let's discuss how our comprehensive solutions can help your business 
            grow and succeed. Get a free consultation and quote today.
          </p>
            </div>

            <div className="flex flex-cols-2 justify-center gap-4 text-white">
                <Link to ="/Services">
                <Button text="Get free Consult"/>
                </Link>
                <Link to ="/About">
                <Button text="Visit more"/>
                </Link>

            </div>
           
          </div>

        </section>
       

        
        
    
    )
}
export default CTASection;