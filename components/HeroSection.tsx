"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            We Build Professional Websites That Help Businesses Grow
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                            Transform your digital presence with high-performance, beautiful, and user-centric websites tailored for your success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" asChild className="text-lg px-8">
                                <Link href="#contact">Contact Us</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-lg px-8">
                                <Link href="#projects" className="group">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Abstract Background Blob */}
                        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

                        {/* Mockup Placeholder */}
                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl border flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-8 bg-background border-b flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="mt-8 p-8 text-center text-muted-foreground">
                                <span className="font-semibold block mb-2">Website Mockup</span>
                                <span className="text-sm border px-3 py-1 rounded-full border-muted-foreground/30">
                                    Interactive Demo
                                </span>
                            </div>

                            {/* Floating Element 1 - Mobile Mockup Hint */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-24 h-48 bg-background rounded-[2rem] border-4 border-gray-800 shadow-xl"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
