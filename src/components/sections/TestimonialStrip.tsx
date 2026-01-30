"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialStrip() {
    return (
        <div className="py-8 bg-black/40 border-y border-white/5 backdrop-blur-md relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-neon/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left"
                >
                    {/* Star Rating & Badge */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-neon fill-neon" />
                            ))}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                            Verified Partner Review
                        </span>
                    </div>

                    {/* Testimonial Text */}
                    <div className="max-w-2xl relative">
                        <Quote className="absolute -top-3 -left-6 w-8 h-8 text-white/5 rotate-180" />
                        <p className="text-white/90 text-sm md:text-base font-medium italic leading-relaxed">
                            "The team at AllConvos AI absolutely nailed the setup for us. Everything’s way more streamlined now — we’re saving a heap of time and we’re booking more appointments without the usual back-and-forth. Super smooth process and great support."
                        </p>
                    </div>

                    {/* Attribution */}
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-white font-black text-xs uppercase tracking-widest">
                            Ryan
                        </p>
                        <p className="text-neon text-[10px] font-black uppercase tracking-widest mt-1">
                            Fitness Box
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
