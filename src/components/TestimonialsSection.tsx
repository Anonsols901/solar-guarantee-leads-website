
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Stoke on Trent",
      quote: "Within the first month, we received 8 highly qualified leads that resulted in 5 installations. The ROI has been phenomenal compared to other lead generation services we've tried.",
      image: "/lovable-uploads/c974660e-47c7-4740-8b14-40458a1b1deb.png"
    },
    {
      name: "Sarah Johnson",
      location: "Carlow",
      quote: "Their guarantee seemed too good to be true, but they delivered exactly as promised. These aren't just leads—they're ready-to-close opportunities with homeowners who understand the value of solar.",
      image: "/lovable-uploads/98e7927a-5382-436f-8acf-07bb45ec27dc.png"
    },
    {
      name: "David Chen",
      location: "Aberdeen",
      quote: "The local market knowledge they bring is impressive. They understand our state incentives better than most of my sales team and use that to properly educate homeowners before we even speak to them.",
      image: "/lovable-uploads/b5eedff2-4d54-4edb-9dee-31f4367c4dd1.png"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-solar-navy">
            Trusted by Solar Installation Companies Nationwide
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-solar-darkGray">
            Don't take our word for it. Hear what our clients have to say about our guaranteed lead generation services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-100 border-0 hover:shadow-lg transition-all appear-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="p-8 relative">
                <Quote className="h-8 w-8 text-solar-emerald opacity-20 absolute top-4 right-4" />
                
                <div className="mb-6">
                  <p className="italic text-solar-darkGray mb-6">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-solar-navy">{testimonial.name}</p>
                    <p className="text-sm text-solar-darkGray">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
