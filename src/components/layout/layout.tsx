
import { ReactNode } from "react";
import { Navigation } from "../ui/navigation";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Your LLC</h3>
              <p className="text-primary-foreground/80 max-w-md">
                Providing professional data services and solutions for businesses across multiple industries.
              </p>
            </div>
            
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a>
                </li>
                <li>
                  <a href="/llc-info" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">LLC Info</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-primary-foreground/80">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </li>
                <li className="text-primary-foreground/80">
                  info@yourllc.com
                </li>
                <li className="text-primary-foreground/80">
                  (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Your LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
