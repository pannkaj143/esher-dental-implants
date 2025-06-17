import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sitemap = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const siteStructure = [
    {
      title: "Main Sections",
      items: [
        { name: "Home", id: "hero-section" },
        { name: "About Us", id: "about-section" },
        { name: "Our Services", id: "services-section" },
        { name: "Meet Our Doctor", id: "doctor-section" },
        { name: "Patient Testimonials", id: "testimonials-section" },
        { name: "Frequently Asked Questions", id: "faq-section" },
        { name: "Contact Us", id: "contact-section" },
      ]
    },
    {
      title: "Dental Services",
      items: [
        { name: "Single Tooth Implants", description: "Replace a missing tooth with a natural-looking implant" },
        { name: "Multiple Tooth Implants", description: "Solutions for multiple missing teeth" },
        { name: "Full Arch Implants", description: "Complete smile restoration with full arch implants" },
        { name: "Implant Supported Dentures", description: "Secure and comfortable denture solutions" },
        { name: "Same Day Implants", description: "Get your new smile in just one day" },
        { name: "Bone Grafting", description: "Prepare your jaw for successful implant placement" },
      ]
    },
    {
      title: "Patient Information",
      items: [
        { name: "Book Consultation", action: () => window.open('https://oltn.sfd.co:300/', '_blank') },
        { name: "Privacy Policy", action: () => document.getElementById('privacy-policy-button')?.click() },
        { name: "Terms of Service", action: () => document.getElementById('terms-service-button')?.click() },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Sitemap | Dental Implant Services in Esher | Confidental Clinic"
        description="Navigate our comprehensive dental implant services in Esher. Find information about single tooth implants, full arch solutions, and book your free consultation today."
        ogType="website"
      />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Site Navigation
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.action ? (
                        <button
                          onClick={item.action}
                          className="text-gray-700 hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <div>
                          <h3 className="text-gray-800 font-medium">{item.name}</h3>
                          {item.description && (
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
