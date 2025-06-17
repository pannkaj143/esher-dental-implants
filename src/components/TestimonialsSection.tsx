import { useState, useEffect, useRef } from 'react';
import { useAnimation } from '@/hooks/use-animation';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({
    threshold: 0.1
  });
  
  const testimonials = [
    {
      name: "Sarah Wood",
      date: "2024-05-30",
      rating: 5,
      text: "Lovely, friendly, reassuring staff. Was dreading the hygienist but was very gentle. 5 stars!",
      source: "Google"
    },
    {
      name: "Sarah Wensley-Hill",
      date: "2024-05-21",
      rating: 5,
      text: "Superb dental practice with professional and caring staff. Dr Jamal has been great with my very anxious 5 year old and has put her at ease during her appointments.",
      source: "Google"
    },
    {
      name: "Humza Mirza",
      date: "2024-05-17",
      rating: 5,
      text: "Came in for a checkup, Syed and Olga were very good at reception, and Stevan was a great dentist!",
      source: "Google"
    },
    {
      name: "Tongai Muzoroza (MUZO)",
      date: "2024-05-09",
      rating: 5,
      text: "Got my tooth cleaned and got fillings amazing service from them",
      source: "Google"
    },
    {
      name: "Almond",
      date: "2024-04-25",
      rating: 5,
      text: "The dentist who treated me was Dr. Stephen Nkansah. He is very professional and also he and his assistant nurses are very kind. Thanks to them, my teeth is no longer painful! Also, the receptionist at the clinic is also very nice. Thanks again to the Confidental Esher team!!",
      source: "Google"
    },
    {
      name: "Martin Davies",
      date: "2024-03-20",
      rating: 5,
      text: "Unbelievable calm experience. Very professional and Harpal the dentist s assistant was superb.",
      source: "Google"
    },
  ];

  // Generate structured data for reviews
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://esherdentalimplants.co.uk/#reviews",
    "name": "Confidental Clinic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "datePublished": testimonial.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "publisher": {
        "@type": "Organization",
        "name": testimonial.source
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewStructuredData)}
        </script>
      </Helmet>
      <section ref={sectionRef} id="testimonials-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our patients who have experienced our exceptional dental care services.
            </p>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            {/* Mobile testimonials (horizontally scrollable) */}
            <div className="md:hidden flex overflow-x-auto space-x-4 pb-4 pt-1 px-1">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md min-w-[80vw] sm:min-w-[300px] flex-shrink-0 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.date}</p>
                    </div>
                    <div className="text-gray-500 text-sm">{testimonial.source}</div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                </div>
              ))}
            </div>
            
            {/* Desktop carousel */}
            <div className="hidden md:block">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-500 text-sm">{testimonial.date}</p>
                          </div>
                          <div className="text-gray-500 text-sm">{testimonial.source}</div>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative mr-4" />
                  <CarouselNext className="relative" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
