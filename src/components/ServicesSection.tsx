
import React from 'react';
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Targeted Digital Advertising",
      description: "We use Meta Ads and LinkedIn Ads to identify and engage homeowners who are actively seeking solar solutions.",
      features: [
        "Precision audience segmentation",
        "Custom creatives tailored for solar interest",
        "Localized ad campaigns for maximum relevance",
        "Real-time performance optimization"
      ]
    },
    {
      title: "Lead Engagement & Pre-Qualification",
      description: "We nurture interested prospects to ensure they meet your criteria and are ready for a serious solar conversation.",
      features: [
        "Follow-up messaging via LinkedIn or Meta Messenger",
        "Property ownership and interest verification",
        "Budget and installation readiness screening",
        "CRM-ready lead handoff"
      ]
    },
    {
      title: "Qualified Appointment Scheduling",
      description: "We convert interest into action by booking sales-ready appointments directly into your team's calendar.",
      features: [
        "Calendar sync for seamless scheduling",
        "Appointment confirmation and reminders",
        "Pre-call prospect brief with key insights",
        "No-show reduction via multi-channel reminders"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-solar-navy mb-4">
            Our Proven Solar Lead Acquisition Strategy
          </h2>
          <p className="text-lg text-solar-darkGray max-w-3xl mx-auto">
            We don't just advertise—we attract, qualify, and convert high-intent solar leads using powerful ad platforms and strategic outreach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 appear-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-solar-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-solar-darkGray mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-solar-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-solar-darkGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
