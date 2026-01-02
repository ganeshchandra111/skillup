"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faqs" className="py-20">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Support</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border rounded-lg bg-card overflow-hidden">
                            <button
                                onClick={() => toggle(faq.id)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                {openId === faq.id ? (
                                    <Minus className="h-5 w-5 text-primary shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-muted-foreground shrink-0 ml-4" />
                                )}
                            </button>

                            <AnimatePresence initial={false}>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
