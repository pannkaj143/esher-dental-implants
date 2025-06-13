import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: "New Consultation Request - Esher Dental Implants",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Esher Dental Implants",
              "url": "https://www.esherdentalimplants.co.uk",
              "logo": "https://www.esherdentalimplants.co.uk/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+442083991291",
                "contactType": "Customer Service",
                "areaServed": "GB",
                "availableLanguage": "English"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to schedule a consultation or ask any questions about our dental implant services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number" 
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental needs" 
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Clinic Information</h3>
            
            <div className="space-y-6">
                <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <a
                  href="https://www.google.com/maps/search/?api=1&query=359+Ewell+Road,+Esher+Surrey+KT6+7BZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary hover:underline"
                  >
                  359 Ewell Road<br />
                  Surbiton<br />
                  Surrey KT6 7BZ
                  </a>
                </div>
                </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:02083991291" className="text-gray-600 hover:text-primary hover:underline">020 8399 1291</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:surbiton@confidentalclinic.com" className="text-gray-600 hover:text-primary hover:underline">surbiton@confidentalclinic.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                    <p>Monday:</p>
                    <p>09.00-13.00 | 14.00-18.00</p>
                    <p>Tuesday:</p>
                    <p>09.00-13.00 | 14.00-18.00</p>
                    <p>Wednesday:</p>
                    <p>09.00-13.00 | 14.00-18.00</p>
                    <p>Thursday:</p>
                    <p>09.00-13.00 | 14.00-18.00</p>
                    <p>Friday:</p>
                    <p>09.00-13.00 | 14.00-17.00</p>
                    <p>Saturday:</p>
                    <p>09.00-13.00</p>
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              title="Confidential Clinic Location Map - Esher"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.8423456789!2d-0.3061234842177!3d51.3915678796046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d1234567890%3A0x1234567890abcdef!2s359%20Ewell%20Rd%2C%20Esher%20KT6%207BZ%2C%20UK!5e0!3m2!1sen!2sus!4v1685264310957!5m2!1sen!2sus" 
              className="w-full h-full border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
