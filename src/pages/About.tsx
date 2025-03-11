
import { Layout } from "@/components/layout/layout";
import { cn } from "@/lib/utils";

const teams = [
  {
    name: "Executive Team",
    members: [
      {
        name: "Jamie Smith",
        role: "Chief Executive Officer",
        bio: "Jamie brings over 15 years of experience in logistics and business management, with a proven track record of scaling operations and driving strategic growth.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Alex Johnson",
        role: "Operations Director",
        bio: "Alex specializes in streamlining processes and enhancing efficiency across all operational sectors of the company.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Taylor Williams",
        role: "Financial Analyst",
        bio: "Taylor is an expert in financial planning and investment strategies, ensuring our company maintains strong fiscal health.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    name: "Operations Team",
    members: [
      {
        name: "Jordan Rivera",
        role: "Logistics Manager",
        bio: "Jordan oversees all logistics operations, ensuring timely and efficient service delivery.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Casey Morgan",
        role: "Data Analyst",
        bio: "Casey specializes in data analysis and visualization, transforming complex data into actionable insights.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    name: "Support Team",
    members: [
      {
        name: "Riley Carter",
        role: "Customer Success Manager",
        bio: "Riley ensures our clients receive exceptional support and achieve their desired outcomes with our services.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Dakota Lee",
        role: "Technical Support Specialist",
        bio: "Dakota provides expert technical assistance, troubleshooting issues to ensure smooth service delivery.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
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
                  Founded in 2018, our LLC was born from a shared vision to create a company that would excel in multiple sectors while maintaining a cohesive, data-driven approach to all our operations.
                </p>
                <p>
                  What started as a small team with big ideas has grown into a diverse organization with specialized divisions, each contributing to our collective success while maintaining our core values of integrity, innovation, and excellence.
                </p>
                <p>
                  Throughout our journey, we've remained committed to providing exceptional service to our clients, fostering strong relationships with our partners, and creating a supportive environment for our team members.
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
                To provide innovative, data-driven solutions that empower our clients to achieve their operational goals with efficiency and precision.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border animate-scale-in animation-delay-100">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-500 text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of integrated business services, recognized for our excellence, integrity, and innovation across all the sectors we serve.
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <p className="text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  ))}
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
