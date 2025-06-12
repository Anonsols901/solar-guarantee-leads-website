
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

const AreasSection = () => {
  // Sample service areas - replace with actual target areas
  const serviceAreas = [
    {
      region: "West Coast",
      states: ["California", "Oregon", "Washington"],
      details: "High solar adoption rates with excellent state incentives and net metering policies.",
      sunHours: "5.5-6 hours",
      paybackPeriod: "5-7 years",
      marketGrowth: "+24% annually"
    },
    {
      region: "Southwest",
      states: ["Arizona", "Nevada", "New Mexico", "Texas"],
      details: "Abundant sunshine and growing demand for renewable energy make these states ideal for solar.",
      sunHours: "6-7 hours",
      paybackPeriod: "4-6 years",
      marketGrowth: "+32% annually"
    },
    {
      region: "Northeast",
      states: ["New York", "Massachusetts", "New Jersey", "Connecticut"],
      details: "Despite fewer sun hours, strong incentives and high electricity costs drive solar adoption.",
      sunHours: "4-5 hours",
      paybackPeriod: "6-8 years",
      marketGrowth: "+18% annually"
    }
  ];

  return (
    <section id="areas" className="section-padding solar-gradient text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 appear-animation">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white bg-opacity-10 shadow-sm border border-white border-opacity-20 mb-4">
            <Map className="h-4 w-4 mr-2 text-solar-yellow" />
            <span className="text-sm font-medium">Service Coverage</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Local Expertise in High-Value Solar Markets
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white text-opacity-90">
            Our lead generation strategies are tailored to each region's unique solar landscape, incentive structures, and customer demographics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-sm border-0 text-white hover:bg-opacity-20 transition-all appear-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">{area.region}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.states.map((state) => (
                    <span key={state} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {state}
                    </span>
                  ))}
                </div>
                <p className="text-sm mb-6 text-white text-opacity-90">{area.details}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs uppercase text-white text-opacity-70">Avg. Sun Hours</p>
                    <p className="font-semibold">{area.sunHours}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white text-opacity-70">Payback Period</p>
                    <p className="font-semibold">{area.paybackPeriod}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white text-opacity-70">Market Growth</p>
                    <p className="font-semibold">{area.marketGrowth}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center appear-animation" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg mb-6">Don't see your target market listed? We can still help!</p>
          <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white hover:text-solar-blue">
            Check Your Service Area
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
