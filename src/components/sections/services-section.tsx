
import { ArrowRight, Truck, WashingMachine } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "transportation",
    title: "Transportation",
    description: "Secure logistics solutions for federal agencies with compliance tracking and reporting.",
    icon: <Truck className="h-6 w-6" />,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    id: "laundry-linen",
    title: "Laundry & Linen",
    description: "Professional linen services with quality care and timely delivery for businesses of all sizes.",
    icon: <WashingMachine className="h-6 w-6" />,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide specialized logistics and linen management services tailored for government contracts and federal requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "group rounded-2xl p-6 border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md bg-white",
                `animate-slide-in-up animation-delay-${index * 100}`
              )}
            >
              <div className={cn("p-3 rounded-xl inline-block mb-4", service.color)}>
                <span className={cn(service.iconColor)}>{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <Link 
                to={`/services#${service.id}`} 
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:opacity-90"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
