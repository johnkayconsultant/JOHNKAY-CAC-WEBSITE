import { Link } from "react-router-dom";
import button from "./ui/button";
import { Building2 } from 'lucide-react';

const sectionFeatures= [{
    icon: Building2,
    title: "Business registration",
    description: "welcome to johnkay consult where life is easier"
    },
    {
    icon: Building2,
    title: "Company registration",
    description: "welcome to johnkay consult where life is easier"
    },
    {
    icon: Building2,
    title: "Ngo registration",
    description: "welcome to johnkay consult where life is easier"
    
},

]



const SectionPreview =()=>{
    return(
            <section className="py-15 bg-green-700">
                <div className="container-section">
                    {/* the section header */}
                    <div className="text-center mb-16 mx-auto">
                        <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">What to do</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Core {" "} <span className="text-white">SERVICES</span></h2>
                        <p>Delivering excellence across multiple industries with our comprehensive service portfolio.</p>
                    </div>
                    <div className="rounded-full grid md:grid-cols-3 mb-12 gap 8">
                        {sectionFeatures.map((Features)=>(
                            <div
                            key= {Features.title}
                            className=" group items-center"
                            >
                            <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Features.icon className="w-6 h-6 text-accent-foreground"/>
                            </div>
                            <h3 className="text-3xl font bold">{Features.title}</h3>
                            <p className='text-amber-50'>{Features.description}</p>
                            </div>
                        ))}

                        {/* CTA button */}
                        
                           <div className="items-center py-8">
                             <Link to="/Services">
                            <button className="px-16 bg-white">EXPLORE MORE</button>
                            </Link>
                           </div>



                    </div>

                </div>


            </section>
    );
};
export default SectionPreview;