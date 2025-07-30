"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandMedium,
    IconBrandX,
} from "@tabler/icons-react";

const links = [
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Instagram",
        icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Medium",
        icon: (
            <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    }
];

export function FloatingDockDemo() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex items-center justify-center m-2 w-full bottom-0 gap-2">
            <FloatingDock
                desktopClassName="bottom-0 left-0 right-0"
                mobileClassName="translate-y-20"
                items={links}
            />
           
        </div>
    );
}
