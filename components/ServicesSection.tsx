"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Offer</h2>
                    <p className="text-accent-foreground mt-4 max-w-2xl mx-auto">
                        Comprehensive web solutions tailored to your unique business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon as LucideIcon;
                        return (
                            <motion.div
                                key={service.id}
                                className="bg-secondary border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-accent-foreground">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
