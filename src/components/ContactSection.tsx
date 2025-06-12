import React from 'react';
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleScheduleCall = () => {
    window.open('https://calendly.com/solarsmartleads/new-meeting', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 appear-animation">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-4">
              Contact Us
            </h2>
            <h3 className="text-xl font-semibold text-solar-blue mb-6">
              Let's Talk About Growing Your Solar Business
            </h3>
            <p className="text-lg text-solar-darkGray max-w-3xl mx-auto">
              We specialize in helping solar installation companies book qualified appointments through laser-targeted Meta and LinkedIn ads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-solar-navy mb-4 flex items-center">
                Book a Free Strategy Call
              </h4>
              <p className="text-solar-darkGray mb-6">
                Speak directly with a lead generation expert. We'll audit your market, review your goals, and show you exactly how we deliver consistent, high-quality solar leads.
              </p>
              <Button 
                className="bg-solar-emerald hover:bg-solar-green text-white text-lg px-8 py-3"
                onClick={handleScheduleCall}
              >
                Schedule Strategy Call
              </Button>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-solar-blue mb-4 flex items-center">
                Quick Options
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-solar-emerald mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-solar-darkGray">15-Minute Discovery Call</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-solar-emerald mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-solar-darkGray">Custom Ad Strategy Breakdown</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-solar-emerald mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-solar-darkGray">Regional Market Analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-solar-emerald mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-solar-darkGray">No Commitment, Just Value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
