import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQAccordion({ items = [] }) {
  if (!items.length) return null;
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.id || i} value={`faq-${i}`} className="border-border/50">
          <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}