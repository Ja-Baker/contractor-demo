
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Payton Kashmier",
    role: "Co-Founder",
    bio: "University of Missouri student, born and raised near Chicago. Very motivated to create a successful business.",
    image: "/lovable-uploads/ae630127-2abb-4f5f-93be-27710671367c.png",
  },
  {
    name: "Shabir Buttar-Miller",
    role: "Co-Founder",
    bio: "University of Missouri student, born and raised in Saint Louis.",
    image: "/lovable-uploads/0e6f9871-f669-48f3-b396-16c5846ec661.png",
  },
  {
    name: "Jacob Warren",
    role: "Co-Founder",
    bio: "Twenty-One-year-old entrepreneur inspired to build and manage successful businesses. Originally born outside Washington D.C.",
    image: "/lovable-uploads/1532e4f0-d34e-4924-8da1-2505007b8af8.png",
  },
];

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold">About Millicour</h2>
            <p className="text-lg text-muted-foreground">
              Founded by a team of passionate entrepreneurs, Millicour brings innovative solutions and exceptional service to every government contract we undertake.
            </p>
            <p className="text-muted-foreground">
              We maintain all necessary registrations and compliance standards required for federal contracting, including SAM registration, EIN compliance, and appropriate NAICS codes to handle government projects of various types.
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
                    src="/lovable-uploads/5029eb02-94f2-4354-a1ca-39a5dfeb7215.png" 
                    alt="Team planning session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/2a99ec23-ff54-4b4a-8bbb-8cf607d55aa8.png" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/67358412-3744-48f0-bc28-bf2ff4ff502b.png" 
                    alt="Team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] transform -translate-y-8">
                  <img 
                    src="/lovable-uploads/ab2364bc-dc16-41a7-8e8d-b31a46e73f62.png" 
                    alt="Team discussion" 
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
          <div className="text-center mt-10">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-primary font-medium"
            >
              View All Team Members
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
