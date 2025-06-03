
import React from 'react';
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Risk-Free Investment",
      description: "Only pay for leads that are fully qualified and ready to explore solar installation options backed by our performance guarantee.",
      features: [
        "Guaranteed interest in quotes or consultations",
        "No hidden fees",
        "Money-back guarantee if targets aren't met"
      ]
    },
    {
      title: "Data-Driven Market Targeting",
      description: "We leverage advanced analytics to identify ZIP codes and regions with the highest potential for solar conversions. This ensures your ads are seen by homeowners most likely to take action.",
      features: [
        "Geo-targeted campaign setup",
        "Platform-specific optimization for Meta and LinkedIn",
        "Constant data feedback loop for campaign refinement",
        "Prioritized outreach in incentive-rich regions"
      ]
    },
    {
      title: "Guaranteed Results",
      description: "We deliver 5–10 quote-ready leads within 30 days. No other digital solar lead service offers our level of reliability and accountability.",
      features: [
        "Transparent reporting",
        "Leads passed only after vetting for ownership and interest",
        "Personalized ad journeys to boost engagement",
        "Ongoing optimization to maintain lead quality"
      ]
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-4">
            Why Partner With Us
          </h2>
          <h3 className="text-xl font-semibold text-solar-blue mb-6">
            The Benefits of Our Data-Driven Solar Lead Generation
          </h3>
          <p className="text-lg text-solar-darkGray max-w-4xl mx-auto">
            We take the guesswork out of customer acquisition. Our Meta and LinkedIn ad strategies are powered by intelligent analytics, ensuring you reach the right homeowners in the most promising markets so you can focus on installations, not chasing leads.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 appear-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-solar-blue">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-solar-darkGray mb-4">
                  {benefit.description}
                </CardDescription>
                {benefit.features && (
                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-solar-emerald mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-solar-darkGray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
