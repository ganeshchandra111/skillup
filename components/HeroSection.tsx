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
                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl border flex flex-col overflow-hidden">
                            <div className="h-8 bg-background border-b flex items-center px-4 gap-2 shrink-0">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 p-8 relative">
                                {/* Simulated Skeleton UI Animation */}
                                <div className="space-y-4">
                                    <motion.div
                                        className="h-8 bg-muted-foreground/20 rounded w-3/4"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    />
                                    <motion.div
                                        className="h-4 bg-muted-foreground/10 rounded w-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                                    />
                                    <motion.div
                                        className="h-4 bg-muted-foreground/10 rounded w-5/6"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "83%" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                                    />
                                    <div className="flex gap-4 mt-8">
                                        <motion.div
                                            className="h-32 w-full bg-muted-foreground/5 rounded-lg border-2 border-dashed border-muted-foreground/10"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 1.5 }}
                                        />
                                        <motion.div
                                            className="h-32 w-full bg-muted-foreground/5 rounded-lg border-2 border-dashed border-muted-foreground/10"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 1.7 }}
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5, duration: 0.5 }}
                                >
                                    <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                        Live Preview
                                    </span>
                                </motion.div>
                            </div>

                            {/* Floating Element 1 - Code Snippet Hint */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-background rounded-xl border shadow-xl p-4 hidden sm:block"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <div className="space-y-2 w-32">
                                    <div className="h-2 bg-primary/20 rounded w-full" />
                                    <div className="h-2 bg-primary/20 rounded w-2/3" />
                                    <div className="h-2 bg-primary/20 rounded w-3/4" />
                                </div>
                            </motion.div>

                            {/* Floating Element 2 - Success Notification */}
                            <motion.div
                                className="absolute top-1/2 -left-12 bg-background rounded-lg border shadow-xl p-3 flex items-center gap-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5 }}
                            >
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div className="text-xs">
                                    <div className="font-semibold">Optimized</div>
                                    <div className="text-muted-foreground">100% Performance</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
