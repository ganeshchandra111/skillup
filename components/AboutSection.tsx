"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Partnering for Digital Success</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        At SkillUp, we don&apos;t just build websites; we build digital experiences that drive growth.
                        We are a team of passionate designers and developers dedicated to helping businesses establish
                        a strong online presence.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Whether you are a startup needing a launchpad or an established business seeking a revamp,
                        we tailor our solutions to meet your specific goals. We prioritize speed, accessibility,
                        and conversion-focused design to ensure your website works as hard as you do.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
