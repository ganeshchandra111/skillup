"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Skills Unlocked. For All.</h2>

                    <p className="text-lg text-muted-foreground mb-6">
                        SkillUp is a technology-driven learning and digital services platform focused on empowering students and businesses with practical, industry-ready skills. We specialize in designing and developing modern, responsive websites while also mentoring students to master in-demand tech stacks through hands-on learning.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8">
                        Our approach combines real-world project experience, structured guidance, and career-focused training to help learners bridge the gap between academic knowledge and industry expectations. Alongside education, we provide end-to-end web solutions tailored to client needs, ensuring performance, scalability, and clean design.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8">
                        At SkillUp, we believe in unlocking potential through skills—helping students grow into confident professionals and enabling businesses to build strong digital identities.
                    </p>

                    <div className="bg-background/50 rounded-xl p-6 border border-border mt-8">
                        <h3 className="font-semibold text-xl mb-4">We Work With</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["Businesses", "Startups", "Students", "Freelancers", "Service Providers"].map((item, index) => (
                                <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
