
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { useAnimation } from '@/hooks/use-animation';

const AboutClinic = () => {
  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({ threshold: 0.1 });

  const benefits = [
    "Highly recommended dentists ensuring excellent patient satisfaction",
    "Pain-free and fast implant surgery appointments available",
    "NHS and private patients welcome"
  ];

  return (
    <section ref={sectionRef} id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`} style={{ animationDelay: '0.2s' }}>
            <img
              src="/images/5910ed43-26b1-4700-b2f8-5e1e6fe63012.png"
              alt="Happy Dental Patient"
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxWidth: "70%" }}
            />
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-4">WELCOME TO CONFIDENTAL CLINIC</h2>
            <p className="text-gray-700 mb-6">
              Highly specialized and personalized to ensure that all aspects of 
              dental care are provided with patience, knowledge and attention to 
              detail in order to maintain optimal dental health, resulting in happy 
              and satisfied patients.
            </p>
            
            <div className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center md:justify-start">
              <button 
                className="mt-8 bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-md transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
