"use client";

import { projects } from "@/data/projects";
// import { motion, useScroll, useTransform } from "framer-motion"; 

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export default function HorizontalProjectsScroller() {
    return (
        <section id="projects" className="py-24 bg-foreground text-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Works</h2>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            A showcase of our finest web development projects.
                            We take pride in every pixel.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2 text-sm text-muted-foreground">
                        <span>Scroll horizontally to explore &rarr;</span>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-12 px-4 md:px-12 custom-scrollbar snap-x snap-mandatory">
                <div className="flex gap-8 w-max">
                    {/* Spacer for left padding alignment */}
                    <div className="w-0 md:w-4 flex-shrink-0" />

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group h-[300px] md:h-[400px] w-[85vw] md:w-[500px] bg-background text-foreground rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 snap-center border border-border/10"
                        >
                            {/* Website Preview (Iframe or Image) */}
                            <div className="absolute inset-0 bg-muted">
                                {project.link === "none" || project.link === "javascript:void(0)" ? (
                                    <div className="w-full h-full relative">
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

                                {/* Overlay */}
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

                    {/* Spacer for right padding alignment */}
                    <div className="w-4 md:w-12 flex-shrink-0" />
                </div>
            </div>
        </section>
    );
}
