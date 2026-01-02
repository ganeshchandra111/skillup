"use client";

import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
    const handleWhatsAppClick = (planName: string, price: string) => {
        // Message logic: Hello Skill Up, We would like to have a website worth [PLAN PRICE]. Please share more details about the process and timeline. Thank you.
        const message = `Hello Skill Up,\nWe would like to have a website worth ${price}.\nPlease share more details about the process and timeline.\nThank you.`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919959912572"; // Replace with actual number
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    return (
        <section id="pricing" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Pricing</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Simple, Transparent Pricing</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            className={`relative bg-background border rounded-2xl p-8 flex flex-col ${plan.popular ? "shadow-2xl ring-2 ring-primary scale-105 z-10" : "shadow-sm hover:shadow-lg"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    <span className="ml-1 text-muted-foreground">/ one-time</span>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button asChild size="lg" className="w-full gap-2">
                                <Link href={handleWhatsAppClick(plan.name, plan.price)} target="_blank">
                                    <MessageCircle size={18} /> Contact on WhatsApp
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
