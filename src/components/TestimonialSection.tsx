import { Star, Quote } from "lucide-react";

const testimonial= [
   {
        name:"TOLULOPE AJAYI",
        role:"SENIOR PASTOR",
        content:"THE SERVICE WA TOP NOTCH, HAVING THIS EXPIRENCE WAS SO SWEET",
        Rating:"5",    
   },

    {
        name:"TOLULOPE AJAYI",
        role:"SENIOR PASTOR",
        content:"Outstanding facility management services. They've reduced our operational costs by 30% while improving overall building performance.",
        Rating:"5",    
   },

    {
        name:"TOLUMIKE AJAYI",
        role:"SENIOR PASTOR",
        content:"We've worked with ProBuild on multiple renovation projects. Their professionalism and expertise make them our go-to contractor for all our properties.",
        Rating:"4",    
   },

]


const TestimonialSection=()=>{
    return(
        <section className="py-20 bg-amber-100">
            {/* section header */}
            <div className="max-w-3xl text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">TESTIMONY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">What Our {" "} <span>Client Say</span></h2>
            <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
            </div>

            {/* grid testimony */}
        <div className="grid grid-cols-3 gap-8">
            {testimonial.map((testimonial,index)=>(
                <div key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border relative"><Quote/>

                {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.Rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>

                    {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
                </div>
            ))}
            
            
            </div>    




        </section>
    )
}

export default TestimonialSection;