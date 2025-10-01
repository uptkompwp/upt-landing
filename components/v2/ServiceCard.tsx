"use client";
import React from "react";
import TargetCursor from "../TargetCursor";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="w-full">
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-md hover:scale-[1.02] transition-transform duration-200 ease-out cursor-target">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/8 border border-white/5 text-white">
                        {icon}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
                        <p className="mt-1 text-sm text-white/70">{description}</p>
                    </div>
                </div>

                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl border border-white/3"></div>
                    <div className="absolute top-0 left-0 h-2/3 w-1/2 bg-gradient-to-br from-white/6 to-transparent rounded-tl-2xl blur-md mix-blend-screen"></div>
                </div>
            </div>
        </div>
    );
}
