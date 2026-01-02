import React, { useState } from 'react';
import { ChevronDown, Clock, Scissors, Droplets, Info, Phone, Sparkles, Flower } from 'lucide-react';
import { services } from '../data';
import ScrollReveal from '../components/ScrollReveal';

const Services: React.FC = () => {
  const hairStyling = services.filter(s => s.category === 'Hair & Styling');
  const hairRemoval = services.filter(s => s.category === 'Hair Removal');
  const permanentMakeup = services.filter(s => s.category === 'Permanent Makeup');
  const misc = services.filter(s => s.category === 'Miscellaneous');

  return (
    <div className="overflow-x-hidden">
      {/* Services Hero */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center animate-zoom-in duration-[10s]" 
            style={{ backgroundImage: "url('https://images.fresha.com/locations/location-profile-images/2667506/4955559/20d6957d-32ee-4b0d-8acc-0391280ebc8f-SalonMita-CA-Qubec-Montreal-Fresha.jpg?class=gallery-modal-large&watermark=true&f_width=1920')" }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 lg:py-36 flex flex-col justify-center min-h-[400px]">
          <ScrollReveal animation="animate-fade-in-up">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">Curated Excellence</span>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in-up" delay="delay-200">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight mb-8 max-w-3xl">
              Beauty & Grooming <br className="hidden md:block"/> Reimagined.
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="animate-fade-in-up" delay="delay-400">
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-8 border-l-2 border-primary pl-6">
              From precision cuts to expert coloring and gentle waxing, experience a level of care tailored uniquely to your style.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Disclaimer */}
      <div className="bg-neutral-soft border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2">
            <Info size={14} className="text-primary" />
            Prices listed are starting points
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Hair Removal */}
        <ServiceSection 
          title="Hair Removal" 
          description="Expert threading and waxing techniques for smooth, precise results."
          icon={Droplets}
          items={hairRemoval}
        />

        {/* Not Sure Banner */}
        <ScrollReveal animation="animate-fade-in-up">
          <div className="rounded-sm bg-secondary text-white p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-serif mb-3">Not sure what to pick?</h4>
              <p className="text-gray-300 font-light max-w-lg">
                Our stylists are happy to provide a complimentary 10-minute consultation to assess your hair type and discuss your goals.
              </p>
            </div>
            <a 
              href="tel:5142236697"
              className="shrink-0 bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-sm px-8 py-3.5 text-xs tracking-widest font-bold shadow-sm flex items-center gap-2 relative z-10"
            >
              <Phone size={16} /> CALL FOR ADVICE
            </a>
          </div>
        </ScrollReveal>

        {/* Hair & Styling */}
        <ServiceSection 
          title="Hair & Styling" 
          description="Precision cuts, color, and styling designed to frame your face."
          icon={Scissors}
          items={hairStyling}
        />

        {/* Permanent Makeup */}
        <ServiceSection 
          title="Permanent Makeup" 
          description="Long-lasting beauty solutions tailored to your features."
          icon={Sparkles}
          items={permanentMakeup}
        />

        {/* Miscellaneous */}
        <ServiceSection 
          title="Miscellaneous Services" 
          description="Facials, massage therapy, henna, and more."
          icon={Flower}
          items={misc}
        />

      </main>
    </div>
  );
};

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: any;
  items: any[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, icon: Icon, items }) => {
  return (
    <div>
      <ScrollReveal animation="animate-fade-in-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
        <div>
          <h3 className="text-3xl font-serif text-secondary tracking-tight">{title}</h3>
          <p className="text-gray-500 font-light mt-2">{description}</p>
        </div>
        <Icon className="hidden md:block text-primary/10" size={48} />
      </ScrollReveal>
      <div className="grid gap-6">
        {items.map((item, idx) => (
          <ScrollReveal key={idx} delay={`delay-${(idx % 4) * 100}`} animation="animate-fade-in-up">
            <ServiceAccordion item={item} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

interface ServiceAccordionProps {
  item: any;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-sm border border-gray-100 shadow-sm transition-all duration-300 ${isOpen ? 'shadow-md border-primary/20' : 'hover:shadow-md'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 flex-1 w-full">
          <h4 className="text-xl font-serif text-secondary group-hover:text-primary transition-colors shrink-0">{item.name}</h4>
          {/* Flexible dotted line separator */}
          <span className="hidden sm:block flex-1 border-b-2 border-dotted border-gray-200 mb-1.5 mx-2"></span>
          <span className="text-secondary font-bold font-serif text-lg shrink-0 w-24 text-right">{item.price}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ml-4 shrink-0 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-neutral-soft text-gray-400 group-hover:text-primary'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="grid sm:grid-cols-2 gap-8 text-sm pt-2">
          <div>
            <p className="text-gray-600 font-light leading-relaxed mb-4 text-base">{item.description}</p>
            {item.extra && (
              <div className="inline-block bg-neutral-soft px-3 py-1 rounded-full">
                <p className="text-xs text-secondary tracking-wide uppercase font-bold">{item.extra}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 items-start sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-8">
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Clock size={16} className="text-primary" />
              <span>{item.duration}</span>
            </div>
            <button className="text-xs font-bold tracking-widest text-white bg-secondary hover:bg-black px-6 py-3 rounded-sm uppercase transition-colors">
              Book Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;