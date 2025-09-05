"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

function CustomLogo() {
    return (
        <Link
            href="#"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-medium text-black dark:text-white">Pavan</span>
        </Link>
    );
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-600">
                <div className="w-4 h-4" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 z-10 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors"
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
                <Moon className="w-4 h-4 text-blue-600" />
            )}
        </button>
    );
}

export function MyNavbar({ children }: { children: React.ReactNode }) {
    const navItems = [
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Experience",
            link: "#experience",
        },

    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar className="">
                {/* Desktop Navigation */}
                <NavBody className="bg-white opacity-83 dark:bg-black z-10">
                    <CustomLogo />
                    <NavItems items={navItems} />

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <NavbarButton variant="secondary">
                            <Link href="#contact">Contact</Link>
                        </NavbarButton>
                        <NavbarButton variant="primary">
                            <Link href="/resume.pdf" target="_blank">Resume</Link>
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav className="bg-white dark:bg-black z-[10000]">
                    <MobileNavHeader className="px-3 ">
                        <CustomLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <ThemeToggle />
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="secondary"
                                className="w-full"
                            >
                                <Link href="#contact">Contact</Link>
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                <Link href="/resume.pdf" target="_blank">Resume</Link>
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <div className="">
                {children}
            </div>

            {/* Navbar */}
        </div>
    );
}

