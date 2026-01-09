"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
// Removed Input import as we are using native input

// I'll use standard input tag styled with Tailwind since I haven't created Input component yet.

export default function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppClick = () => {
        // Message logic: Hello Skill Up, We would like to have a website worth [PLAN PRICE]. Please share more details about the process and timeline. Thank you.
        const message = `Hello skillup,\nwe would like to work with you. \nPlease share more details about the process and timeline.\nThank you.`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919494333702"; // Replace with actual number
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    const handleSubmit = () => {
        const SendingMessage = `Hello, i am ${name}. \n My email is ${email}. \n ${message}`;
        const encodedMessage = encodeURIComponent(SendingMessage);
        const phoneNumber = "919494333702"; // Replace with actual number
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-white rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-white rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Amazing Together</h2>
                        <p className="text-primary-foreground/80 text-lg mb-8">
                            Ready to take your business online? We are just a message away.
                            Get in touch for a free consultation and quote.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold">Chat with us</p>
                                    <p className="text-sm opacity-80">WhatsApp Response &lt; 15 mins</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold">Email us</p>
                                    <p className="text-sm opacity-80">skillup.edu.in@gmail.com</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button asChild size="lg" variant="secondary" className="gap-2 text-primary">
                                    <Link href={handleWhatsAppClick()} target="_blank">
                                        <MessageCircle size={20} /> Chat on WhatsApp
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Optional Form Visual */}
                    <motion.div
                        className="bg-background text-foreground rounded-2xl p-8 shadow-2xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-6">Send us a message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full h-10 px-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full h-10 px-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full p-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Tell us about your project..."
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Link href={handleSubmit()} target="_blank">
                                    Send Message
                                </Link>
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
