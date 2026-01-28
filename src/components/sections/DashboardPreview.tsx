"use client";

import { motion } from "framer-motion";
import { Activity, Globe, MessageSquare, Zap, Shield, Users, Terminal } from "lucide-react";

export function DashboardPreview() {
    return (
        <section className="py-24 bg-ocean-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 mb-6"
                    >
                        <Activity className="w-3 h-3 text-neon" />
                        <span className="text-[10px] font-mono text-neon uppercase tracking-widest font-bold">SYSTEM_PREVIEW_v4.2</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic tracking-tight uppercase">
                        MISSION CONTROL <span className="text-white/20">/</span> DASHBOARD
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                        // Real-time interception. Total visibility over every conversation, automated or human.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-ocean-900/50 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]"
                >
                    {/* Header bar */}
                    <div className="h-12 border-b border-white/5 bg-black/40 flex items-center px-6 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-4">ALLCONVOS_ENGINE_001</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-mono text-neon animate-pulse leading-none">LIVE_CONNECTION_OK</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_10px_#07de14]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-0 min-h-[500px]">
                        {/* Sidebar */}
                        <div className="col-span-1 border-r border-white/5 bg-black/20 flex flex-col items-center py-8 gap-8">
                            {[Activity, Globe, MessageSquare, Zap, Shield, Users].map((Icon, idx) => (
                                <Icon key={idx} className={`w-5 h-5 ${idx === 0 ? 'text-neon' : 'text-white/20'}`} />
                            ))}
                        </div>

                        {/* Main Content Areas */}
                        <div className="col-span-11 p-8 overflow-hidden">
                            <div className="grid grid-cols-12 gap-6">
                                {/* Stats Row */}
                                <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                                    {[
                                        { label: 'Total Interceptions', value: '4,281', trend: '+12%', color: 'text-neon' },
                                        { label: 'AI Resolution Rate', value: '94.2%', trend: '+3.1%', color: 'text-blue-400' },
                                        { label: 'Avg Response Time', value: '0.8s', trend: '-0.2s', color: 'text-purple-400' },
                                        { label: 'Active Channels', value: '24/24', trend: 'STABLE', color: 'text-gray-300' },
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                            <p className="text-[10px] font-mono text-white/30 uppercase mb-2">{stat.label}</p>
                                            <div className="flex items-baseline gap-2">
                                                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                                                <span className="text-[10px] text-white/20 font-mono">{stat.trend}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Analytics Card */}
                                <div className="col-span-12 lg:col-span-8 group relative rounded-xl bg-black/40 border border-white/5 p-6 overflow-hidden min-h-[320px]">
                                    <div className="absolute inset-0 opacity-20 bg-[url('/tech-grid.svg')] bg-grid pointer-events-none" />
                                    <div className="relative z-10 flex justify-between items-start mb-8">
                                        <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                                            <Activity className="w-3 h-3 text-neon" />
                                            GLOBAL_ENGAGEMENT_FLOW
                                        </h3>
                                        <div className="flex gap-2">
                                            <span className="w-2 h-2 rounded-full bg-neon/80" />
                                            <span className="w-2 h-2 rounded-full bg-blue-500/80" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-48 flex items-end px-8 gap-[2px]">
                                        {[...Array(40)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 10 + Math.random() * 20 }}
                                                animate={{ height: Math.random() * 120 + 20 }}
                                                transition={{
                                                    duration: 1.5 + Math.random(),
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut"
                                                }}
                                                className="flex-1 bg-gradient-to-t from-neon/5 to-neon/40 rounded-t-[1px]"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Side Terminal Card */}
                                <div className="col-span-12 lg:col-span-4 rounded-xl bg-black/60 border border-white/5 p-4 font-mono text-[10px] flex flex-col min-h-[320px] relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-3 h-3 text-neon" />
                                            <span className="text-white/40">LIVE_ENGINE_LOGS</span>
                                        </div>
                                        <span className="text-neon animate-pulse text-[8px]">REC</span>
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        {[
                                            { time: '18:54:12', msg: 'Intercepted: "I need an urgent quote"', status: 'INTERCEPT', color: 'text-neon/60' },
                                            { time: '18:54:13', msg: 'Executing triage_v2', status: 'SYS', color: 'text-blue-400/60' },
                                            { time: '18:54:15', msg: 'Qualified: Residential Plumbing', status: 'AUTH', color: 'text-purple-400/60' },
                                            { time: '18:54:20', msg: 'Slot found: 14:00 Today', status: 'CAL', color: 'text-white/20' },
                                            { time: '18:54:35', msg: 'Booking confirmed!', status: 'WIN', color: 'text-neon' }
                                        ].map((log, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex gap-2"
                                            >
                                                <span className="text-white/20">[{log.time}]</span>
                                                <span className={log.color}>{log.msg}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    {/* Scanline effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-20 animate-scan-fast" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </section>
    );
}
