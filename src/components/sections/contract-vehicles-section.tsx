
import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contractVehicles = [
  {
    id: "gsa",
    title: "GSA Schedule",
    contract: "GS-00F-000AA",
    description: "General Services Administration Multiple Award Schedule",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "IT Professional Services",
      "Logistics Support Services",
      "Security Services"
    ],
    color: "bg-blue-50 border-blue-200 text-blue-700"
  },
  {
    id: "idiq",
    title: "IDIQ Contract",
    contract: "W91CRB-00-D-0000",
    description: "Indefinite Delivery, Indefinite Quantity",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Transportation Services",
      "Material Handling",
      "Warehousing Solutions"
    ],
    color: "bg-green-50 border-green-200 text-green-700"
  },
  {
    id: "seaport",
    title: "SeaPort-NxG",
    contract: "N00178-00-D-0000",
    description: "Navy's electronic platform for acquiring support services",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "Systems Engineering",
      "Program Management",
      "Logistics Support"
    ],
    color: "bg-purple-50 border-purple-200 text-purple-700"
  }
];

export function ContractVehiclesSection() {
  return (
    <section className="py-20 bg-white" id="contract-vehicles">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Contract Vehicles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain multiple government contract vehicles to provide streamlined procurement options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contractVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id}
              className={cn(
                "rounded-2xl border p-6 transition-all duration-300 hover:shadow-md",
                `animate-fade-in animation-delay-${index * 100}`
              )}
            >
              <div className={cn("p-4 rounded-xl inline-block mb-4", vehicle.color)}>
                {vehicle.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{vehicle.title}</h3>
              <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded inline-block mb-2">{vehicle.contract}</p>
              <p className="text-muted-foreground mb-4">{vehicle.description}</p>
              
              <ul className="space-y-2">
                {vehicle.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Additional contracting methods available through partnerships and teaming agreements.
            <br />Contact our contracting office for specific procurement vehicles for your agency.
          </p>
        </div>
      </div>
    </section>
  );
}
