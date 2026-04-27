'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionTrigger className="text-left font-display text-base font-semibold sm:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-deep/80 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
