import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleGetMoreCustomers = () => {
    window.open('https://calendly.com/solarsmartleads/new-meeting', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-solar-gray min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-solar-emerald opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white shadow-sm border border-solar-gray">
              <span className="flex h-2 w-2 rounded-full bg-solar-emerald mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-solar-darkGray">Trusted by Solar Installation Companies Nationwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-solar-navy leading-tight">
              We <span className="text-solar-emerald">Guarantee</span> 5-10 Quote-Ready Solar Customers <span className="text-solar-emerald">In 30 Days</span>
            </h1>
            
            <p className="text-lg md:text-xl text-solar-darkGray max-w-3xl mx-auto">
              Or your money back. Our proven lead generation system delivers pre-qualified homeowners ready for solar installations in your service area.
            </p>
            
            <div className="flex justify-center">
              <Button 
                className="text-lg px-8 py-6 bg-solar-emerald hover:bg-solar-green text-white shadow-lg"
                onClick={handleGetMoreCustomers}
              >
                Get More Customers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <p className="text-sm text-solar-darkGray">
                <span className="font-semibold">Trusted by 50+ Companies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
