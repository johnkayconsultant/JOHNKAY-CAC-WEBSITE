import { CircleCheck } from "lucide-react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const highlight=[
        "Buiness Name Registration",
        "Company registration",
        "Ngo registration",
        "scuml registration",
        "facebook ads",
        "learn and earn cac registration",
    ];

const AboutSection=()=>{
    return(
            <section className="py-16 bg-amber-300">
                <div className="grid grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                    <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4 text-center">About Us</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold ">Excellent in every {" "} <span>Project We Deliver</span></h2>
                    <p>For over 15 years, ProBuild Corp has been at the forefront of 
                facility management, construction, and electrical solutions. Our 
                commitment to quality and innovation has made us a trusted partner 
                for businesses across the globe.</p>
                </div>

                {/* highlight grid */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {highlight.map((highlight)=>(
                       <div key={highlight}>
                        <CircleCheck className="h-5 w-5"/>
                        <span>{highlight}</span>
                        </div>
                    ))}
                    </div>

                    <div className="text-center space-y-2 py-3">
                        <Link to ="/About">
                    <Button text="Learn More About Us"/>
                    </Link>
                    </div>

            </section>
    )
}
export default AboutSection; 