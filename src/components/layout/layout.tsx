
import { ReactNode, useState } from "react";
import { Navigation } from "../ui/navigation";
import { Phone, Mail } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from "@/components/ui/sheet";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      {/* Auto Insurance Claims Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Sheet open={isEmergencyOpen} onOpenChange={setIsEmergencyOpen}>
          <SheetTrigger asChild>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <span>Auto Insurance Claims</span>
            </button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-xl">Auto Insurance Claims</SheetTitle>
              <SheetDescription>
                Contact information for automobile incidents
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Us Immediately</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:partners@millicour.com" className="text-blue-600 hover:underline">
                      partners@millicour.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:6362037140" className="text-blue-600 hover:underline">
                      (636) 203-7140
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Steps to Take</h3>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Ensure everyone's safety and call emergency services if needed</li>
                  <li>Document the incident with photos</li>
                  <li>Exchange information with other parties involved</li>
                  <li>Contact us using the information above</li>
                  <li>Do not admit fault or discuss details with other parties</li>
                </ol>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Millicour</h3>
              <p className="text-primary-foreground/80 max-w-md">
                Providing professional services and solutions for government agencies across multiple industries.
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
                  Email: partners@millicour.com
                </li>
                <li className="text-primary-foreground/80">
                  Phone: (636) 203-7140
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Millicour. All rights reserved.
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
