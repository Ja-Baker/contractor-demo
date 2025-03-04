
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
                  <p className="text-muted-foreground">Your LLC</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Type of Entity</h3>
                  <p className="text-muted-foreground">Limited Liability Company (LLC)</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Founding Date</h3>
                  <p className="text-muted-foreground">January 15, 2018</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">State of Registration</h3>
                  <p className="text-muted-foreground">Delaware</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tax Identification Number</h3>
                  <p className="text-muted-foreground">XX-XXXXXXX (EIN)</p>
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
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Social Media Presence</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LLCInfo;
