
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Jamie Smith",
    role: "Chief Executive Officer",
    bio: "Over 15 years of experience in logistics and business management.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Alex Johnson",
    role: "Operations Director",
    bio: "Specializes in streamlining processes and enhancing efficiency.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Taylor Williams",
    role: "Financial Analyst",
    bio: "Expert in financial planning and investment strategies.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold">About Our LLC</h2>
            <p className="text-lg text-muted-foreground">
              Founded with a vision to provide exceptional services across multiple industries, our LLC brings together a diverse team of professionals united by shared goals and experiences.
            </p>
            <p className="text-muted-foreground">
              We believe in transparency, quality, and building lasting relationships with our clients and partners. Our approach combines innovative solutions with proven methodologies to deliver consistent results.
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Office environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Business meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] transform -translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Data analysis" 
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
          <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h3>
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
