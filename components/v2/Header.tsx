"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/galleries", label: "Galleries" },
        { href: "/contact", label: "Contact" },
    ];


    const getActive = (href: string) => {
        if (typeof window === "undefined") return false
        return window.location.pathname === href;
    };

    return (
        <header className="px-3 sticky top-5" style={{ zIndex: 9999 }}>
            <div className="flex items-center justify-between px-6 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl max-w-5xl mx-auto mt-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] w-full">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-white font-bold text-xl tracking-wide drop-shadow">
                        UPT <span className="text-cyan-300">KOMP</span>
                    </span>
                </Link>

                <nav className="hidden md:flex gap-8 text-white font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`transition-colors hover:text-cyan-300 ${getActive(item.href) ? "text-cyan-300" : ""}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-full right-0 mt-3 w-full px-5 text-white font-medium md:hidden"
                        >
                            <div className="rounded-2xl border border-white/20 bg-black/80 backdrop-blur-lg shadow-xl p-5 flex flex-col gap-4" >
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-cyan-300 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0 -z-10 overflow-hidden rounded-full">
                    <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-20 blur-2xl" />
                </div>
            </div>
        </header>
    );
}
