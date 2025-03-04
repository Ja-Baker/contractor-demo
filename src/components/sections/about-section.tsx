
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Col. James Anderson (Ret.)",
    role: "Chief Executive Officer",
    bio: "25 years of military logistics experience and 10 years in government contracting.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Dr. Michael Reynolds",
    role: "Operations Director",
    bio: "Former DoD logistics advisor specializing in supply chain optimization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Compliance Officer",
    bio: "Expert in federal contracting regulations and procurement guidelines.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold">About Our Company</h2>
            <p className="text-lg text-muted-foreground">
              Founded by veterans and government contracting specialists, our company brings extensive experience in federal logistics and compliance to every project we undertake.
            </p>
            <p className="text-muted-foreground">
              We maintain all necessary security clearances and certifications required for federal contracting, including SAM registration, CAGE code compliance, and appropriate facility clearances to handle government projects of various classification levels.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:opacity-90 mt-4"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] transform translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Government logistics operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Team planning session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Government facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] transform -translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Logistics management" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-500"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={cn(
                  "bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1",
                  `animate-scale-in animation-delay-${index * 100}`
                )}
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
