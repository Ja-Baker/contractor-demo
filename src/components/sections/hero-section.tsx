
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80"></div>
      </div>
      
      <div className="container max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2 animate-slide-in-up">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              GOVERNMENT CONTRACT LOGISTICS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Reliable Logistics Solutions for Federal Agencies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4">
              Delivering efficient and compliant logistics and data management services to government agencies and contractors nationwide.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-slide-in-up animation-delay-200">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:opacity-90"
            >
              Contract Services
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
