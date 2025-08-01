import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I install FiveM mods on my server?",
    answer: "Installing FiveM mods is simple with our 1-click installer. Navigate to your server control panel, browse our mod library, and click install. Advanced users can also upload custom mods via FTP."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your server plan at any time. The upgrade is instant and your existing data remains intact. You'll only pay the prorated difference for the current billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 7-day money-back guarantee for all new customers. If you're not satisfied with our service, contact our support team for a full refund within 7 days of purchase."
  },
  {
    question: "What's included with DDoS protection?",
    answer: "All servers include enterprise-grade DDoS protection capable of mitigating attacks up to 1Tbps. Our protection runs 24/7 automatically without any configuration needed from you."
  },
  {
    question: "How quickly can I get my server online?",
    answer: "Most servers are deployed within 60 seconds of payment confirmation. Minecraft servers with popular modpacks can be online in under 2 minutes with our 1-click installation system."
  },
  {
    question: "Do you provide backups?",
    answer: "Yes! We perform automated daily backups for all servers. You can also create manual backups anytime through your control panel. Backups are stored for 7 days and can be restored with one click."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Get answers to common questions about our hosting services</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-border/50"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};