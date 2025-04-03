
import { Layout } from "@/components/layout/layout";
import { cn } from "@/lib/utils";
import { Truck, WashingMachine } from "lucide-react";

const services = [
  {
    id: "transportation",
    title: "Transportation",
    description: "Efficient logistics solutions for your transportation needs with real-time tracking and reliable service.",
    longDescription: "Our transportation services provide comprehensive logistics solutions designed to meet the diverse needs of our clients. With real-time tracking capabilities, we ensure transparency throughout the delivery process. Our fleet is well-maintained and operated by experienced professionals committed to timely and secure deliveries. We handle everything from local deliveries to long-distance transport, implementing efficient routing systems to optimize time and resources.",
    features: [
      "Real-time GPS tracking and monitoring",
      "Scheduled and on-demand services",
      "Secure handling of sensitive materials",
      "Optimized routing for efficiency",
      "Comprehensive insurance coverage",
    ],
    icon: <Truck className="h-6 w-6" />,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
    image: "/lovable-uploads/32419a70-2ddd-44e1-baf7-22c704c14bb1.png",
  },
  {
    id: "laundry-linen",
    title: "Laundry & Linen",
    description: "Professional linen services with quality care and timely delivery for businesses of all sizes.",
    longDescription: "Our laundry and linen services provide businesses with high-quality textile care and management. We understand the importance of clean, well-maintained linens in various industries, from hospitality to healthcare. Our state-of-the-art facilities and eco-friendly processes ensure that all items are treated with care while meeting the highest standards of cleanliness. We offer flexible scheduling options to accommodate the unique needs of each client, ensuring timely pickups and deliveries.",
    features: [
      "Commercial and industrial laundering",
      "Specialized handling for delicate items",
      "Scheduled pickup and delivery",
      "Inventory management systems",
      "Eco-friendly cleaning processes",
    ],
    icon: <WashingMachine className="h-6 w-6" />,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-500",
    image: "/lovable-uploads/4f60b4b1-4045-4a32-a420-7671f60839bc.png",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              We provide a diverse range of professional services tailored to meet your business needs with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  index % 2 !== 0 && "lg:grid-flow-dense"
                )}
              >
                <div className={cn(
                  index % 2 !== 0 ? "lg:col-start-2" : "",
                  "animate-slide-in-up"
                )}>
                  <div className={cn("p-3 rounded-xl inline-block mb-4", service.color)}>
                    <span className={cn(service.iconColor)}>{service.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={cn(
                  index % 2 !== 0 ? "lg:col-start-1" : "",
                  "animate-slide-in-up animation-delay-200"
                )}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8">
              Our team can design tailored service packages to meet your specific requirements and business objectives.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
