
import { Layout } from "@/components/layout/layout";
import { cn } from "@/lib/utils";

const teams = [
  {
    name: "Our Team",
    members: [
      {
        name: "Payton Kashmier",
        role: "Co-Founder",
        bio: "University of Missouri student, born and raised near Chicago. Very motivated to create a successful business.",
        qualifications: "University of Missouri Engineering School. Problem Solver, Reliable, Personable, Helpful.",
        image: "/lovable-uploads/ae630127-2abb-4f5f-93be-27710671367c.png",
      },
      {
        name: "Shabir Buttar-Miller",
        role: "Co-Founder",
        bio: "University of Missouri student, born and raised in Saint Louis.",
        qualifications: "University of Missouri Business School. Clayton High School graduate.",
        image: "/lovable-uploads/0e6f9871-f669-48f3-b396-16c5846ec661.png",
      },
      {
        name: "Jacob Warren",
        role: "Co-Founder",
        bio: "Twenty-One-year-old entrepreneur inspired to build and manage successful businesses. Originally born outside Washington D.C., and now lives in Columbia, Missouri.",
        qualifications: "Eureka High School graduate. Previous business ventures with networking and financial literacy.",
        image: "/lovable-uploads/1532e4f0-d34e-4924-8da1-2505007b8af8.png",
      },
      {
        name: "Andrew Shaw",
        role: "Co-Founder",
        bio: "Twenty-One-year-old, eager to grow and maintain a top 1% business in America. Born and raised in Fishers IN, grew up as a multi-sport athlete who took pride in the idea of competing to be the best alongside your brothers.",
        qualifications: "Highschool Graduate. Recruiter for a Construction Staffing company, with a splash of entrepreneurship in my own website.",
        image: "/placeholder.svg",
      },
      {
        name: "Clay Covert",
        role: "Co-Founder",
        bio: "Twenty-year-old, wanting to connect in and maintain a constantly improving organization meeting demands and needs around the country. I originate from St. Louis, Missouri and wrestled for over 11 years.",
        qualifications: "Lafayette Highschool Graduate. Previous experience - Togo Manager. Associate in Aczero LLC, an innovating tech company in GPU and AI science.",
        image: "/placeholder.svg",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Millicour</h1>
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
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Millicour is a dedicated government contracting firm specializing in providing high-quality services and solutions to federal, state, and local government agencies. With a commitment to excellence, efficiency, and compliance, we deliver innovative solutions tailored to the unique needs of our clients.
                </p>
                <p>
                  Founded on September 30th, 2024, our team brings together diverse backgrounds and skill sets united by a common goal: creating a successful business that delivers exceptional value to government clients.
                </p>
                <p>
                  We offer a comprehensive range of services, including Laundry and Linen, Transportation, and Data Management, all designed to meet the rigorous standards of government contracting.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/5029eb02-94f2-4354-a1ca-39a5dfeb7215.png" 
                  alt="Our team planning session" 
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
                We are guided by integrity, excellence, innovation, collaboration, and a commitment to exceeding expectations in everything we do. We adhere to all regulatory standards and best practices to ensure transparency and accountability in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="space-y-16">
            {teams.map((team) => (
              <div key={team.name} className="space-y-8">
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
                        <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                        <h5 className="font-medium text-sm mb-1">Bio</h5>
                        <p className="text-muted-foreground mb-3">{member.bio}</p>
                        <h5 className="font-medium text-sm mb-1">Qualifications</h5>
                        <p className="text-muted-foreground">{member.qualifications}</p>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Company Information</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[150px] font-semibold">Founded</div>
                <div>September 30th, 2024</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[150px] font-semibold">EIN</div>
                <div>33-1273206</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[150px] font-semibold">NAICS Code</div>
                <div>812331</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-[150px] font-semibold">SIC Code</div>
                <div>70-89</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
