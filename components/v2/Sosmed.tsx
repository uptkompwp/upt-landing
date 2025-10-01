"use client";

import { Card, CardContent } from "@/components/ui/card";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";
export default function Sosmed() {
    const items = [
        {
            href: "https://www.youtube.com/channel/UCO6r1i12aeMerFmzHxcTM9g",
            image: "/yt.png",
            title: "Youtube",
            description: "UPT KOMPUTER",
        },
        {
            href: "https://www.instagram.com/uptkomputer_/",
            image: "/ig.png",
            title: "Instagram",
            description: "uptkomputer_",
        },
    ];

    return (
        <div
            className="text-white space-y-6">
            {items.map((item, i) => (
                <SpotlightCard className="p-0 !backdrop-blur-lg !bg-white/10 !border !border-white/20" spotlightColor="rgba(0, 255, 255, 0.2)" key={i}>
                    <Card
                        className="border-none"
                    >
                        <CardContent className="flex items-center gap-4 p-6">
                            <Image src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-contain" width={150} height={150} />
                            <div>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-lg hover:underline"
                                >
                                    {item.title}
                                </a>
                                <p className="text-sm opacity-80">{item.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                </SpotlightCard>
            ))}
        </div>
    );
}
