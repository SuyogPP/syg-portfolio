"use client"

import React from 'react'
import { Button } from '../ui/button';
import { Home, User, Briefcase, Mail } from "lucide-react";
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';
import { usePathname, useRouter } from 'next/navigation';

export function Navigation() {

    const pathname = usePathname();
    const { push } = useRouter();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { icon: Home, id: "home", path: "/" },
        { icon: User, id: "profile", path: "/profile" },
        { icon: Briefcase, id: "experience", path: "/projects" },
        { icon: Mail, id: "contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full mx-auto flex justify-center">
            <Card className="h-16  rounded-lg px-4 py-5 !flex flex-row items-center gap-2 max-w-xl w-full">
                {navItems.map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        size="icon"
                        onClick={() => push(item.path)}
                        className={cn("rounded-full hover:bg-secondary p-5", { "bg-secondary": item.path === pathname })}
                    >
                        <item.icon className="!h-6 !w-6 text-muted-foreground" />

                    </Button>
                ))}

                <div className="flex flex-1" />
                <Button
                    className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-6"
                    onClick={() => scrollToSection("contact")}
                >
                    Hire Me
                </Button>
            </Card>
        </nav>
    )
}

export default Navigation