"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "./Logo";

export function Navigation({ data: _data }: { data: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const links = [
        { href: "/#about", label: "About us" },
        { href: "/#process", label: "Process" },
        { href: "/#project", label: "Project" },
        { href: "/#service", label: "Service" },
        { href: "/#pricing", label: "Pricing" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
                scrolled ? "pt-3 pb-3 bg-background/80 backdrop-blur-xl border-b shadow-soft" : "pt-6 md:pt-8"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />

                <nav className="hidden md:flex flex-1 justify-center pointer-events-none">
                    <div className="pointer-events-auto flex items-center p-1.5 rounded-full border bg-background/50 backdrop-blur-xl shadow-soft">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-all duration-200 px-5 py-2 rounded-full",
                                    "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="flex items-center gap-4 z-50">
                    <ModeToggle />
                    <Button className="hidden md:flex rounded-full px-6 btn-press shadow-medium hover:shadow-elevated glow-blue" size="lg">
                        Book a call
                    </Button>

                    <button
                        className="md:hidden p-2 text-foreground bg-secondary rounded-full border backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 top-0 left-0 right-0 h-screen bg-background/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-8"
                    >
                        <div className="flex flex-col space-y-1">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-foreground text-xl font-medium border-b border-border/50 py-5 block hover:text-primary hover:translate-x-2 transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button className="w-full rounded-full btn-press shadow-medium glow-blue" size="lg">
                                Book a call
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}