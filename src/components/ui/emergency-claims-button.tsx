
import { useState } from "react";
import { ChevronDown, Phone, Mail, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencyClaimsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-40 md:right-8 md:bottom-8">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-500 shadow-lg",
            isOpen 
              ? "bg-destructive text-destructive-foreground" 
              : "bg-white text-primary hover:bg-secondary"
          )}
        >
          <span className="font-medium">Auto Insurance Claims</span>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-300", 
            isOpen && "rotate-180"
          )} />
        </button>

        <div 
          className={cn(
            "absolute bottom-full right-0 mb-2 w-80 rounded-lg overflow-hidden transition-all duration-500 bg-black/90 border border-gray-800",
            isOpen 
              ? "opacity-100 transform translate-y-0 pointer-events-auto" 
              : "opacity-0 transform translate-y-4 pointer-events-none"
          )}
        >
          <div className="bg-destructive text-destructive-foreground p-4">
            <h3 className="font-semibold text-lg">Auto Insurance Claims</h3>
            <p className="text-sm opacity-85">Quick access to emergency contacts</p>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-white/70" />
              <div>
                <p className="font-medium text-white">Emergency Hotline</p>
                <p className="text-white/70 text-sm">+1 (800) 555-1212</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-white/70" />
              <div>
                <p className="font-medium text-white">Email Support</p>
                <p className="text-white/70 text-sm">claims@yourllc.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Scale className="h-5 w-5 mt-0.5 text-white/70" />
              <div>
                <p className="font-medium text-white">Legal Counsel</p>
                <p className="text-white/70 text-sm">Johnson & Associates</p>
                <p className="text-white/70 text-sm">+1 (888) 123-4567</p>
                <a 
                  href="mailto:legal@johnsonfirm.com" 
                  className="inline-block text-xs mt-1 px-2 py-1 bg-white/20 rounded text-white hover:bg-white/30 transition-colors"
                >
                  Contact attorney
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
