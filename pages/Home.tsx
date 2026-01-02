import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Star, Sparkles, Scissors, Palette, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section - Full Image */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-zoom-in duration-[20s]"
          style={{ backgroundImage: "url('https://images.fresha.com/locations/location-profile-images/2667506/4955560/f481a386-048e-4ac0-a61c-8cb2d2893fa9-SalonMita-CA-Qubec-Montreal-Fresha.jpg?class=gallery-modal-large&watermark=true&f_width=1920')" }}
        >
           <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <ScrollReveal animation="animate-fade-in-down" delay="delay-300">
            <div className="flex items-center gap-4 text-white/90 font-bold tracking-[0.2em] text-xs uppercase mb-2">
              <span className="w-12 h-[1px] bg-white/60"></span>
              <span>Est. 2014</span>
              <span className="w-12 h-[1px] bg-white/60"></span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="animate-fade-in-up" delay="delay-500">
            <h1 className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight drop-shadow-sm">
              Beauty, <br/>
              <span className="italic font-light text-white/90">Redefined.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="animate-fade-in-up" delay="delay-700">
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl font-light drop-shadow-sm mx-auto">
              Expert threading, waxing, and hair services tailored to bring out your natural glow. Experience precision and care in every visit.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="animate-fade-in-up" delay="delay-1000">
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4 items-center justify-center">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-white text-secondary hover:bg-neutral-200 text-sm tracking-widest font-bold px-10 py-4 rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 group min-w-[200px]"
              >
                <span>BOOK APPOINTMENT</span>
                <Calendar size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="bg-transparent hover:bg-white/10 text-white border border-white text-sm tracking-widest font-bold px-10 py-4 rounded-sm transition-all min-w-[200px]"
              >
                OUR SERVICES
              </button>
            </div>
          </ScrollReveal>

          {/* Trust Badge */}
          <ScrollReveal animation="animate-fade-in" delay="delay-[1200ms]">
            <div className="flex items-center gap-4 pt-8 opacity-90 hover:opacity-100 transition-opacity">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-secondary/50 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6K9c6yLzeZkWy7XQBiVe4XRsjT9XaipGNxZ_pfcXhCDuqeUdpSGp1WxWL-fNIPNmcNrVVeVlWf4M7bYgymkH3g6E8dLOo3yEw92wtO3DmkHN7CwDya8NK3ZSxJnG8eTXFwqfvUYbvmbOG7_DsLQDoiPEIphuJALFnNPvPIcfv-vpP4czcN1Sh6CHG7ZxNLmg1JbU2Sa_P_KsI3xsCaa9Ir2MWtfQ7Spk1NBDjdlWIL1MM9QPAQrD1sqA2kEQBudAhccaoOuj7bU" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-secondary/50 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ4SbAZQVgZreKpzC_I9xyE4wJu6cP-018r8g2nQEDQYYmHuzTKfBfqi94jntaxu0fUQ3iCMl0FmtUV2v1M3qHThMf6Gsh87f9nn-Gj0XMRx8VnjisoUZYSH8FNvNsSsQpb4Ev8Z5fss7I1LJKSjbNoG46VvjhtgPKCB-MFInIpkdRtZjqmOxFe-09FAqdhLgua0H7jja8vzhv4Cug89d15Xk0VBrZsCMjZmkaiQME1DhZJ4I4KGqjEKAMLWHtlOhr3u13DECX3tM" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-secondary/50 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgExnW2qNWI3UEOtWDbO3j9W1Yj-irizkm4zUrkid9z7YRAmWw4m9njPLgHGQ0u89hEn0i_NR_f-6djesxywv0tkWN8gko9bdR2Tt3QX6ZwT5T9pp8IhjTE-9nfOJvzT-WgLm5rocBWHjOuXjY3UgG_FOFK-jR5RsbFHaVciqcXjfsT4DBMp9UeM13pnfzIu_Mcd-fyTpadf6YNxoEWg9C0QIo-uEVk-2f38L0C8wCp4ktEwAyL5H4iCutEnSuzsh1AkxwSWUtJuk" alt="Client" />
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 text-primary mb-0.5">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />)}
                </div>
                <p className="text-xs font-semibold tracking-wide text-white uppercase">Trusted by 500+ Clients</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signature Services */}
      <section className="w-full bg-white py-24 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Menu</span>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary">Signature Services</h2>
              <p className="text-slate-500 font-light">Discover a range of treatments designed to make you look and feel your absolute best.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Eyebrow Threading",
                desc: "Precision shaping tailored to your unique facial structure.",
                img: "https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/476644984_1062374292601435_2529500814856619906_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cXngTI27JPcQ7kNvwF1-1bd&_nc_oc=AdldeK5Rz36aGlB_q9K9QkCyWARF7YppQ6HQbWg6AMARu3H70tMF3HoT6U_5VKR0hIw&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=RbwcaJxRYtQ6wHduIhpQWw&oh=00_AflGZ6aS2cYB4Xexc0VTDg0U0TcIYGD9ENsksztPvEOhPw&oe=6953B7CA"
              },
              {
                title: "Full Body Waxing",
                desc: "Smooth, long-lasting results with our gentle waxing techniques.",
                img: "https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/476349763_1060391236133074_6429136941985986860_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SeM1F_V2UycQ7kNvwGMr9qE&_nc_oc=AdkcuMWOVZ1eR4uUH-TIsI3l0xHb2JKa0ilJBsc7C_7aJSWgP3-LG_vXD6IKJbhVasE&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=MAyHgfa7MVmtdOaH-vwfgA&oh=00_AflrAOLXmRzheuzAZwYuGNa4MxakeTbRZHevBQd1i8qDAQ&oe=6953B590"
              },
              {
                title: "Haircuts & Styling",
                desc: "Modern cuts, blowouts, and styling for any occasion.",
                img: "https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/492000962_1120446406794223_2654223447872341603_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X6JGF8qASycQ7kNvwF6LCJz&_nc_oc=Adm8syLMdfgJgJtNLu2KurGxIj3ROWP5tLxnsX3kBkDYD0r7OjI5NP1P4ElEXycjaYY&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=TtJKxdSnNeAO49CQKzRlxg&oh=00_AflvAbAJfrN2IMZInc3zSP3qwKtxHzHlNi_zWT7IRbl60Q&oe=6953A0BA"
              },
              {
                title: "Hair Coloring",
                desc: "Vibrant colors, highlights, and balayage by expert colorists.",
                img: "https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/476825115_1062366289268902_4340905939287969410_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4i-uOoCMjaYQ7kNvwHYVBRT&_nc_oc=AdnLh9z0oEyuDSL8WPKp7IkojVcLtUauyeHQKcl_OkabgaJuKJ1AAIAWd8it8GHBE4o&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=yy9aDRiHI6U-Pkfn6l8TrA&oh=00_Afn_YH-7Tt41KqkJFVAxIth1FdFIrJkRn9pZ9yGppUcMbA&oe=6953B872"
              }
            ].map((service, idx) => (
              <ScrollReveal key={idx} delay={`delay-${idx * 200}`} className="h-full">
                <div 
                  onClick={() => navigate('/services')}
                  className="group flex flex-col gap-6 p-4 cursor-pointer h-full"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden relative">
                     <div className="w-full h-full bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-110" style={{ backgroundImage: `url('${service.img}')` }}></div>
                  </div>
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-serif text-secondary mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="mt-auto pt-2 flex justify-center">
                    <span className="text-secondary text-xs font-bold tracking-widest uppercase border-b border-secondary/30 pb-0.5 group-hover:border-primary group-hover:text-primary transition-all">
                      View Details
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="animate-fade-in" delay="delay-500">
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate('/services')}
                className="bg-secondary text-white hover:bg-black text-sm tracking-widest font-bold px-10 py-4 rounded-sm transition-colors"
              >
                VIEW FULL MENU
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Section: Threading */}
      <section className="w-full bg-neutral-soft py-24 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <ScrollReveal animation="animate-zoom-in">
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 -z-10 rounded-full blur-xl"></div>
              <div className="rounded-sm overflow-hidden shadow-2xl aspect-[4/3] w-full">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/491999956_1120448450127352_38723983626140708_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_QPCcAC4jb8Q7kNvwEg5hKT&_nc_oc=AdnEVCPtIcoPHeybnrXaoXryE922g0-lUoz8Z-BCb95_P55_ZBQojcGHyHgtPg2OfeM&_nc_zt=23&_nc_ht=scontent.fymq3-1.fna&_nc_gid=RnWQbbsLnCYkzIAsokmqbw&oh=00_Afmo2-3MIQwOMWZBABYftmnH0Zy2kxDP4rqHP_au6EYiZg&oe=6953AA10')" }}></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sand/30 -z-10 rounded-full blur-xl"></div>
            </ScrollReveal>
          </div>
          
          <div className="flex-1 space-y-8 pl-0 md:pl-8">
            <ScrollReveal animation="animate-fade-in-up" delay="delay-200">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Specialty</span>
                <h2 className="text-4xl md:text-5xl font-serif text-secondary">The Art of Threading</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light mt-6">
                Threading is an ancient hair removal technique that offers more precision than waxing. It's gentle on the skin and creates the perfect arch for your face shape. At Salon Mita, threading isn't just a service—it's our craft.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Precise definition",
                  "Chemical-free",
                  "Less irritation than waxing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-light">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle size={14} /> 
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="w-full bg-white py-24 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-serif text-secondary mb-20">Simple 3-Step Booking</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-gray-200 -z-10"></div>
            {[
              { icon: Sparkles, title: "Select Service", text: "Browse our menu and choose the treatments you need." },
              { icon: Calendar, title: "Choose Time", text: "Pick a date and time that fits your schedule perfectly." },
              { icon: Star, title: "Glow Up", text: "Come in, relax, and let our experts take care of you." }
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={`delay-${idx * 300}`} animation="animate-fade-in-up">
                <div className="flex flex-col items-center gap-6 bg-white group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-neutral-soft border border-gray-100 flex items-center justify-center text-primary text-xl font-serif font-bold shadow-sm z-10 group-hover:border-primary/50 transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-secondary mb-3">{step.title}</h3>
                    <p className="text-gray-500 font-light text-sm max-w-[220px] mx-auto leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full bg-secondary py-20 px-4 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <ScrollReveal animation="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Ready for your glow up?</h2>
            <p className="text-white/70 text-lg font-light mt-4 mb-8">Appointments available today. Walk-ins are always welcome!</p>
            <button 
              onClick={() => navigate('/booking')}
              className="bg-primary hover:bg-primary-dark text-white text-sm tracking-widest font-bold px-12 py-5 rounded-sm shadow-2xl transition-all"
            >
              BOOK APPOINTMENT NOW
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;