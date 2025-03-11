
import { Layout } from "@/components/layout/layout";
import { cn } from "@/lib/utils";

const teams = [
  {
    name: "Leadership Team",
    members: [
      {
        name: "James Anderson",
        role: "Chief Executive Officer",
        bio: "James brings over 15 years of experience in logistics and government contracting. His expertise in navigating federal procurement processes has been instrumental in our company's growth and success in securing major contracts.",
        qualifications: "MBA in Business Administration, PMP Certification, Former Military Logistics Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Sarah Williams",
        role: "Chief Operations Officer",
        bio: "Sarah oversees all operational aspects of our business, ensuring efficient service delivery and client satisfaction. Her background in supply chain optimization has helped streamline our processes and improve our service quality.",
        qualifications: "MS in Supply Chain Management, Six Sigma Black Belt, 12 years in Federal Contracting",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    name: "Operations Team",
    members: [
      {
        name: "Michael Johnson",
        role: "Transportation Director",
        bio: "Michael manages our transportation division, overseeing fleet operations, logistics planning, and delivery scheduling. His expertise in route optimization has significantly reduced our delivery times and operational costs.",
        qualifications: "BS in Logistics Management, CDL Certification, 10 years in Transportation Management",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Emily Rodriguez",
        role: "Laundry & Linen Services Manager",
        bio: "Emily leads our laundry and linen services, ensuring high-quality textile care and timely delivery to government facilities. Her attention to detail and commitment to excellence have earned us a reputation for superior service.",
        qualifications: "BS in Textile Management, Certified Laundry Manager, 8 years in Industrial Laundry Operations",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    name: "Compliance & Administration",
    members: [
      {
        name: "Robert Chen",
        role: "Compliance Director",
        bio: "Robert ensures our operations meet all federal regulations and contract requirements. His meticulous approach to compliance has helped us maintain perfect audit records and avoid regulatory issues.",
        qualifications: "JD with focus on Government Contracting, Certified Federal Contracts Manager, 15 years in Regulatory Compliance",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Lisa Thompson",
        role: "Administrative Manager",
        bio: "Lisa manages our administrative functions, ensuring smooth daily operations and effective communication between departments. Her organizational skills and attention to detail keep our business running efficiently.",
        qualifications: "BA in Business Administration, Certified Administrative Professional, 7 years in Government Contract Administration",
        image: "https://images.unsplash.com/photo-1581824043583-6904b080a19c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
];

const sharedExperiences = [
  {
    title: "Military Background",
    description: "Many of our team members have served in the military, bringing discipline, leadership, and a deep understanding of government operations to our work.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80"
  },
  {
    title: "Government Contracting Experience",
    description: "Our leadership team collectively brings over 50 years of experience in government contracting, navigating complex regulations, and delivering on federal projects.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80"
  }
];

const About = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our LLC</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our mission, our team, and the shared experiences that drive our business forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, our LLC was born from a shared vision to create a company that would excel in providing specialized services to government agencies while maintaining a cohesive, data-driven approach to all our operations.
                </p>
                <p>
                  What started as a small team with big ideas has grown into a diverse organization with specialized divisions in transportation and laundry services, each contributing to our collective success while maintaining our core values of integrity, innovation, and excellence.
                </p>
                <p>
                  Throughout our journey, we've remained committed to providing exceptional service to our government clients, fostering strong relationships with federal agencies, and creating a supportive environment for our team members.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Our company story" 
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border animate-scale-in">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-500 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide innovative, efficient services to government agencies, helping them fulfill their missions through reliable transportation and linen management solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border animate-scale-in animation-delay-100">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-500 text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of specialized services to federal agencies, recognized for our excellence, integrity, and innovation across all sectors we serve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border animate-scale-in animation-delay-200">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-purple-500 text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                We are guided by integrity, excellence, innovation, collaboration, and a commitment to exceeding expectations in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          
          <div className="space-y-16 mt-12">
            {teams.map((team, teamIndex) => (
              <div key={team.name} className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">{team.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {team.members.map((member, memberIndex) => (
                    <div 
                      key={member.name} 
                      className={cn(
                        "bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1",
                        `animate-scale-in animation-delay-${memberIndex * 100}`
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
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium">Bio</h5>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Qualifications</h5>
                            <p className="text-muted-foreground text-sm">{member.qualifications}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Shared Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sharedExperiences.map((experience, index) => (
              <div key={experience.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border animate-scale-in">
                <div className="aspect-video">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
