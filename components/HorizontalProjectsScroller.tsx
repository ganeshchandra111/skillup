"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function HorizontalProjectsScroller() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-foreground text-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">

                    {/* Intro Card */}
                    <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Works</h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            A showcase of our finest web development projects.
                            We take pride in every pixel.
                        </p>
                        <div className="flex gap-2 text-sm text-muted-foreground">
                            <span>&larr; Scroll to explore</span>
                        </div>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group h-[50vh] md:h-[60vh] w-[80vw] md:w-[40vw] lg:w-[30vw] min-w-[300px] bg-background text-foreground rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
                        >
                            {/* Website Preview (Iframe or Image) */}
                            <div className="absolute inset-0 bg-muted">
                                {project.link === "none" || project.link === "javascript:void(0)" ? (
                                    <div className="w-full h-full relative">
                                        {/* Using standard img for simplicity in this context or could use Next Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <iframe
                                        src={project.link}
                                        title={project.title}
                                        className="w-[200%] h-[200%] border-0 transform scale-50 origin-top-left pointer-events-none"
                                        loading="lazy"
                                    />
                                )}

                                {/* Overlay to prevent interaction and darken for text readability */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-300" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center text-white z-10">
                                <span className="text-sm font-medium tracking-widest uppercase mb-2 text-primary">{project.category}</span>
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                <p className="mb-8">{project.description}</p>
                                {project.link !== "none" && (
                                    <Button asChild variant="default" className="bg-white text-black hover:bg-white/90">
                                        <Link href={project.link} target="_blank">
                                            Visit Live Website <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
