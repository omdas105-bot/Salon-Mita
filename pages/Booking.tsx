import React, { useState } from 'react';
import { Calendar, CheckCircle, Scissors, Sparkles, Clock, AlertCircle, UserX, ChevronDown, Check, Star } from 'lucide-react';
import { services } from '../data';
import ScrollReveal from '../components/ScrollReveal';

const Booking: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <ScrollReveal animation="animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-xs tracking-widest font-bold uppercase w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Available Today
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="animate-fade-in-up" delay="delay-200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-secondary">
                Ready for a <br/> <span className="text-primary italic">Transformation?</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="animate-fade-in-up" delay="delay-400">
              <p className="text-lg text-slate-500 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Expert threading, waxing, haircuts, and color services tailored to your unique style. Secure your spot in just a few clicks.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="animate-fade-in-up" delay="delay-600">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                 <p className="text-sm text-gray-400 font-medium flex items-center gap-2 border-l-2 border-primary pl-4">
                   Walk-ins welcome based on availability.<br/> Booking recommended.
                 </p>
              </div>
            </ScrollReveal>
          </div>
          {/* Visual */}
          <div className="relative">
            <ScrollReveal animation="animate-zoom-in" delay="delay-300">
              <div className="absolute top-10 right-10 w-full h-full border-2 border-secondary/10 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
                <div 
                  className="w-full h-full bg-center bg-cover bg-no-repeat hover:scale-105 transition-transform duration-[1.5s]" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBU_djG3AiooRm6OrEF5SWBdnWptsGGMp0Q04okYUSPpSzvrbaYssuYlR-nlOt5koOF9IUWVnJNc6ZyuRg0t8kNq8qEXGa4HQ4jsMRM2dgj5Uz3cRqlM8yxvCKdIec3znU7UDuQjAsiGuvt_5_gu5eOi4gj8BHQXd_YaN-cYhppaYLhnsEUKGRjlmi0zDkKIcBpWcLsvPmS6lY3-AY9bSmBPeHkwJmAU1fKDEl9AYz0fIUmw85iS6by0xnOJWOy3qsm__LPclBs778')" }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <div className="flex items-center gap-4">
                     <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-200 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                          </div>
                       ))}
                     </div>
                     <div>
                        <div className="flex text-primary mb-1">
                          {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <span className="text-sm font-light text-white/90">Join 500+ Happy Clients</span>
                     </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Widget Area */}
      <section className="py-20 bg-neutral-soft border-y border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <ScrollReveal animation="animate-fade-in-up">
            <BookingWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal animation="animate-fade-in-up" className="text-center mb-20">
          <h2 className="text-4xl font-serif text-secondary mb-6">What to Expect</h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto">We've streamlined our process to ensure your visit is relaxing from the moment you step in.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-12 relative">
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gray-200 z-0 border-t border-dashed"></div>
           {[
             { icon: CheckCircle, title: "1. Check-In", text: "Arrive 5 minutes early to settle in. We'll have water or tea ready for you.", anim: "group-hover:animate-float" },
             { icon: Scissors, title: "2. Consultation", text: "Discuss your goals with our stylist. We prioritize precision and comfort.", anim: "group-hover:animate-snip" },
             { icon: Sparkles, title: "3. Final Reveal", text: "Check the results in our well-lit mirrors. Walk out feeling refreshed!", anim: "group-hover:animate-twinkle" }
           ].map((step, idx) => (
             <ScrollReveal key={idx} delay={`delay-${idx * 200}`} animation="animate-fade-in-up">
               <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
                 <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-8 text-secondary group-hover:text-primary group-hover:border-primary transition-all duration-500">
                   <step.icon size={32} strokeWidth={1.5} className={`transition-all ${step.anim}`} />
                 </div>
                 <h3 className="text-xl font-serif text-secondary mb-4">{step.title}</h3>
                 <p className="text-slate-500 text-sm font-light leading-relaxed px-4">{step.text}</p>
               </div>
             </ScrollReveal>
           ))}
        </div>
      </section>

      {/* FAQ & Policies */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-secondary mb-6">Our Friendly Policies</h2>
            </ScrollReveal>
            {[
              { icon: Clock, title: "Running Late?", text: "We offer a 15-minute grace period. After that, rescheduling may be needed." },
              { icon: AlertCircle, title: "Cancellations", text: "Please notify us at least 24 hours in advance to avoid a fee." },
              { icon: UserX, title: "No-Shows", text: "Missed appointments without notice may require a deposit for future bookings." }
            ].map((policy, i) => (
              <ScrollReveal key={i} delay={`delay-${i * 100}`} animation="animate-fade-in-up">
                <div className="flex gap-6 p-6 rounded-sm bg-neutral-soft border border-gray-100 hover:border-primary/20 transition-colors group">
                  <policy.icon className="shrink-0 text-primary mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold font-serif text-secondary text-lg mb-2">{policy.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{policy.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-secondary mb-10">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="space-y-4">
              {[
                { q: "Do you accept walk-ins?", a: "Yes! However, availability isn't guaranteed on weekends. Booking online is recommended." },
                { q: "What payment methods do you accept?", a: "We accept all major credit cards, Apple Pay, and cash. Tips are appreciated in cash or Venmo." },
                { q: "Is there parking available?", a: "Yes, there is a free parking lot behind our building and ample street parking." },
                { q: "How should I prepare for waxing?", a: "Ensure hair is at least 1/4 inch long. Exfoliate gently the day before." }
              ].map((faq, i) => (
                <ScrollReveal key={i} delay={`delay-${i * 100}`} animation="animate-fade-in-up">
                  <details className="group bg-neutral-soft rounded-sm overflow-hidden border border-transparent open:border-gray-200 transition-colors">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-secondary font-serif text-lg hover:bg-gray-100 transition-colors">
                      {faq.q}
                      <ChevronDown size={20} className="transition group-open:rotate-180 text-gray-400" />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-500 font-light leading-relaxed">{faq.a}</div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const BookingWidget = () => {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "3:45 PM", "5:00 PM"];

  const selectedService = services.find(s => s.id === selectedServiceId);

  // Group services for better selection
  const groupedServices: Record<string, typeof services> = {};
  services.forEach(s => {
    if (!groupedServices[s.category]) {
      groupedServices[s.category] = [];
    }
    groupedServices[s.category].push(s);
  });

  return (
    <div className="bg-white rounded-lg p-8 sm:p-12 shadow-xl border border-gray-100 text-center">
      <div className="mb-10 flex flex-col items-center">
        <h3 className="text-3xl font-serif text-secondary mb-3">
          {step === 1 && "Select Service"}
          {step === 2 && "Choose Date & Time"}
          {step === 3 && "Confirm Details"}
        </h3>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${step >= i ? 'bg-primary' : 'bg-gray-200'}`}></div>
          ))}
        </div>
      </div>
      
      {/* Widget Content */}
      <div className="w-full max-w-xl mx-auto text-left min-h-[300px]">
        {step === 1 && (
           <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="max-h-[400px] overflow-y-auto pr-2 no-scrollbar space-y-6">
                {Object.entries(groupedServices).map(([category, categoryServices]) => (
                  <div key={category}>
                    <h4 className="font-serif text-secondary font-bold text-lg mb-3 sticky top-0 bg-white z-10 py-1">{category}</h4>
                    <div className="space-y-3">
                      {categoryServices.map(s => (
                        <div 
                          key={s.id}
                          onClick={() => setSelectedServiceId(s.id)}
                          className={`p-5 border rounded-sm cursor-pointer flex justify-between items-center transition-all ${selectedServiceId === s.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                           <div className="flex flex-col">
                              <span className="font-serif font-medium text-lg text-secondary">{s.name}</span>
                              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase mt-0.5">{s.duration}</span>
                           </div>
                           <div className="flex items-center gap-4 shrink-0">
                             <span className="text-gray-500 font-light w-20 text-right">{s.price}</span>
                             {selectedServiceId === s.id && <CheckCircle size={20} className="text-primary animate-zoom-in" />}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <button 
                  disabled={!selectedServiceId}
                  onClick={() => setStep(2)}
                  className="w-full bg-secondary disabled:bg-gray-300 text-white py-4 rounded-sm font-bold tracking-widest uppercase transition-colors"
                >
                  Continue
                </button>
              </div>
           </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
             <div className="mb-6 p-4 bg-neutral-soft rounded-sm text-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Availability for Tomorrow</span>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
               {times.map(t => (
                 <button
                   key={t}
                   onClick={() => setSelectedTime(t)}
                   className={`py-3 px-2 rounded-sm border text-sm font-medium transition-all ${selectedTime === t ? 'bg-secondary text-white border-secondary' : 'border-gray-200 hover:border-gray-300 text-secondary'}`}
                 >
                   {t}
                 </button>
               ))}
             </div>
             <div className="flex gap-4">
               <button 
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-300 text-secondary py-4 rounded-sm font-bold tracking-widest uppercase transition-colors hover:bg-gray-50"
                >
                  Back
                </button>
                <button 
                  disabled={!selectedTime}
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-secondary disabled:bg-gray-300 text-white py-4 rounded-sm font-bold tracking-widest uppercase transition-colors"
                >
                  Continue
                </button>
             </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center py-8">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-zoom-in">
               <Check size={40} className="animate-bounce-subtle" />
             </div>
             <h4 className="text-2xl font-serif text-secondary mb-2">You're All Set!</h4>
             <p className="text-gray-500 font-light mb-8 max-w-sm mx-auto">
               Your appointment for <span className="font-bold text-secondary">{selectedService?.name}</span> ({selectedService?.duration}) at <span className="font-bold text-secondary">{selectedTime}</span> is confirmed.
             </p>
             <button 
                onClick={() => { setStep(1); setSelectedServiceId(null); setSelectedTime(null); }}
                className="bg-primary text-white py-4 px-12 rounded-sm font-bold tracking-widest uppercase shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
              >
                Book Another
              </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Booking;