
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/32419a70-2ddd-44e1-baf7-22c704c14bb1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80"></div>
      </div>
      
      <div className="container max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2 animate-slide-in-up">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              GOVERNMENT CONTRACT SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Reliable Solutions for Federal Agencies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4">
              Delivering efficient and compliant transportation, laundry, and data management services to government agencies nationwide.
            </p>
          </div>
          
          <div className="mt-8 space-y-6 animate-slide-in-up animation-delay-200">
            <h2 className="text-2xl font-semibold">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              At Millicour, we provide specialized services tailored to meet the unique needs of government contracts. Our commitment to compliance ensures transparency and accountability in every project we undertake.
            </p>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Commitment to Compliance: We adhere to all regulatory standards and best practices.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Quality Assurance: Rigorous quality control measures ensure excellence in every service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Transparent Reporting: Detailed documentation and regular updates for all clients.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-slide-in-up animation-delay-300">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:opacity-90"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium transition-all hover:bg-secondary/80"
            >
              About Our Company
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-border flex items-start justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-[slide-in-down_1.5s_ease-in-out_infinite]"></div>
        </div>
        <span className="text-xs text-muted-foreground mt-2">Scroll down</span>
      </div>
    </section>
  );
}
