import { Layout } from "@/components/layout/layout";
import { cn } from "@/lib/utils";

const LLCInfo = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LLC Information</h1>
            <p className="text-lg text-muted-foreground">
              Key details about our business registration, credentials, and official information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Official Name</h3>
                  <p className="text-muted-foreground">Millicour, LLC</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Type of Entity</h3>
                  <p className="text-muted-foreground">Limited Liability Company (LLC)</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Founding Date</h3>
                  <p className="text-muted-foreground">September 30th, 2024</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">State of Registration</h3>
                  <p className="text-muted-foreground">Missouri</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tax Identification Number</h3>
                  <p className="text-muted-foreground">33-1273206 (EIN)</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Government Registrations</h2>
              <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">SAM.gov Registration</h3>
                  <p className="text-muted-foreground">
                    <span className="block">Registration Date: March 10, 2018</span>
                    <span className="block">Registration #: SAM12345678</span>
                    <span className="block">Status: Active</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">DUNS Number</h3>
                  <p className="text-muted-foreground">123456789</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">CAGE Code</h3>
                  <p className="text-muted-foreground">ABC12</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">NAICS Codes</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>541990 - All Other Professional, Scientific, and Technical Services</li>
                    <li>541614 - Process, Physical Distribution, and Logistics Consulting Services</li>
                    <li>518210 - Data Processing, Hosting, and Related Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border p-8 animate-scale-in">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-500 text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business License</h3>
              <p className="text-muted-foreground">
                <span className="block">License #: BL-12345-NYC</span>
                <span className="block">Issued: February 1, 2018</span>
                <span className="block">Renewal: Annual (February)</span>
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border p-8 animate-scale-in animation-delay-100">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-green-500 text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Security</h3>
              <p className="text-muted-foreground">
                <span className="block">ISO 27001 Certified</span>
                <span className="block">GDPR Compliant</span>
                <span className="block">Annual Security Audits</span>
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border p-8 animate-scale-in animation-delay-200">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-purple-500 text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-muted-foreground">
                <span className="block">General Liability: $2M</span>
                <span className="block">Professional Liability: $1M</span>
                <span className="block">Cyber Insurance: $1M</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Operating Information</h2>
            
            <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM ET</li>
                  <li>Saturday: Closed</li>
                  <li>Sunday: Closed</li>
                  <li>24/7 Emergency Support Available</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Primary Office Location</h3>
                <p className="text-muted-foreground">
                  <span className="block">123 Business Ave, Suite 100</span>
                  <span className="block">New York, NY 10001</span>
                  <span className="block">United States</span>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  <span className="block">General Inquiries: info@yourllc.com</span>
                  <span className="block">Customer Support: support@yourllc.com</span>
                  <span className="block">Phone: (555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LLCInfo;
