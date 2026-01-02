import React from 'react';
import { Diamond, Tag, ShieldCheck, Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* About Hero / Philosophy - Centered Layout */}
      <section className="relative px-4 md:px-10 py-16 md:py-32 max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center gap-12">
          {/* Text Content */}
          <ScrollReveal animation="animate-fade-in-up">
            <div className="flex flex-col gap-6 items-center max-w-3xl">
              <span className="text-primary font-bold tracking-widest text-xs uppercase border-b border-primary/30 w-fit pb-1">Our Philosophy</span>
              <h1 className="text-secondary text-5xl md:text-6xl lg:text-7xl font-serif leading-none tracking-tight">
                 We Listen. <br/> We Care. <br/> <span className="text-primary italic">We Create.</span>
              </h1>
              <h2 className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-4">
                 Welcome to Salon Mita, where your beauty goals are our priority. Experience a modern approach to grooming, self-care, and confidence.
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Centered Image */}
          <ScrollReveal animation="animate-zoom-in" delay="delay-200" className="w-full">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-t-full rounded-b-lg overflow-hidden shadow-2xl mx-auto">
              <div 
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000" 
                style={{ backgroundImage: "url('https://res.cloudinary.com/dam04v7gq/image/upload/v1767395350/Screenshot_2026-01-02_180853_yuecr5.png')" }}
              ></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-neutral-soft py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <ScrollReveal animation="animate-fade-in">
              <div className="absolute top-4 left-4 w-full h-full border border-secondary/20 rounded-sm -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div 
                className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: "url('https://images.fresha.com/locations/location-profile-images/2667506/4955558/7c476ce2-ef8f-4b0b-9d58-a208214bc6e5-SalonMita-CA-Qubec-Montreal-Fresha.jpg?class=gallery-modal-large&watermark=true&f_width=1920')" }}
              ></div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left items-center md:items-start">
            <ScrollReveal animation="animate-fade-in-up" delay="delay-200">
              <h2 className="text-secondary text-4xl font-serif">Our Story</h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg mt-4">
                <p>
                   Salon Mita started as a small passion project and has grown into a community staple. We founded this space with a simple mission: to create a salon experience where clients truly feel heard.
                </p>
                <p>
                   We pride ourselves on listening to our clients, delivering consistent quality, and creating a space where everyone feels welcome.
                </p>
              </div>
              <div className="flex gap-12 pt-6 border-t border-gray-200 mt-6 justify-center md:justify-start">
                 <div><p className="text-4xl font-serif text-secondary">5k+</p><p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Happy Clients</p></div>
                 <div><p className="text-4xl font-serif text-secondary">10+</p><p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Exp</p></div>
                 <div><p className="text-4xl font-serif text-secondary">4.0</p><p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Rating</p></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <ScrollReveal animation="animate-fade-in-up">
          <div className="text-center mb-16">
             <span className="text-primary font-bold tracking-widest text-xs uppercase">Why Choose Us</span>
             <h2 className="text-secondary text-4xl font-serif mt-4">What We Believe</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: Diamond, title: "Uncompromising Quality", text: "We use only premium products for your hair and skin." },
             { icon: Tag, title: "Fair & Honest Prices", text: "Transparent pricing with no hidden surprises." },
             { icon: ShieldCheck, title: "Hospital-Grade Hygiene", text: "Cleanliness is our top priority for your safety." }
           ].map((val, i) => (
             <ScrollReveal key={i} delay={`delay-${i * 150}`} animation="animate-fade-in-up">
               <div className="flex flex-col gap-6 p-10 rounded-sm bg-white border border-gray-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-neutral-soft flex items-center justify-center text-primary mx-auto">
                    <val.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-secondary text-xl font-serif">{val.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{val.text}</p>
               </div>
             </ScrollReveal>
           ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-neutral-soft py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
           <ScrollReveal>
             <h2 className="text-secondary text-4xl font-serif mb-16 text-center">Meet Our Experts</h2>
           </ScrollReveal>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { name: "Sarah Jenkins", role: "Color Specialist", img: "https://cdn.vectorstock.com/i/500p/34/96/black-silhouette-of-a-young-woman-with-hair-bun-vector-54353496.jpg" },
               { name: "Mita", role: "Founder & Master Stylist", img: "https://scontent.fymq3-1.fna.fbcdn.net/v/t1.6435-9/51683540_1213098205525256_8819483113454305280_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rCgD9hh8wN8Q7kNvwF737cf&_nc_oc=AdnZEF2dkvbJ9mTQLgixwiBDcOT5m-yOtjclLLHrNQayYGbLrRfEkog6zjD2qn_Enr0&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=XpPJ2yuiA6bedwuLcF9Quw&oh=00_AfkLBMkXAKSTVErS3ZEqniHKVpmCdsJ7J-EXxjY-PLybow&oe=69755205" },
               { name: "David Chen", role: "Senior Barber", img: "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=" }
             ].map((member, i) => (
               <ScrollReveal key={i} delay={`delay-${i * 200}`} animation="animate-fade-in-up">
                 <div className="flex flex-col gap-4 group">
                   <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200 shadow-md">
                     <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" style={{ backgroundImage: `url('${member.img}')` }}></div>
                   </div>
                   <div className="text-center">
                      <h3 className="text-xl font-serif text-secondary mb-1">{member.name}</h3>
                      <p className="text-primary text-xs uppercase tracking-widest font-bold">{member.role}</p>
                   </div>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

      {/* Community Love */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
         <ScrollReveal>
           <h2 className="text-center text-4xl font-serif text-secondary mb-16">Community Love</h2>
         </ScrollReveal>
         <div className="grid md:grid-cols-3 gap-10">
           {[
             { text: "Finally found a stylist who listens! Mita understood exactly what I wanted.", author: "Jessica S." },
             { text: "Best threading in town. Quick, precise, and virtually painless.", author: "Michelle R." },
             { text: "Great atmosphere and professional staff. Coming here for 3 years.", author: "Alex L." }
           ].map((review, i) => (
             <ScrollReveal key={i} delay={`delay-${i * 200}`} animation="animate-fade-in-up">
               <div className="relative bg-white p-10 rounded-sm shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow h-full">
                  <Quote className="text-primary/20 mx-auto mb-6" size={40} />
                  <p className="text-slate-500 mb-6 italic font-light text-lg">"{review.text}"</p>
                  <div className="w-10 h-px bg-primary mx-auto mb-4"></div>
                  <p className="font-bold text-secondary font-serif">{review.author}</p>
               </div>
             </ScrollReveal>
           ))}
         </div>
      </section>

    </div>
  );
};

export default About;