"use client"

import React from 'react'
import { Button } from '../ui/button';
import { Home, User, Briefcase, Mail } from "lucide-react";
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';
import { usePathname, useRouter } from 'next/navigation';
import DownloadResume from '../download-resume';
import { Icon } from '@iconify/react';
import { ModeToggle } from '../theme-selector';

export function Navigation() {

    const pathname = usePathname();
    const { push } = useRouter();


    const navItems = [
        { icon: "pixelarticons:home", id: "home", path: "/" },
        { icon: "pixelarticons:user", id: "profile", path: "/profile" },
        { icon: "pixelarticons:briefcase-check", id: "experience", path: "/projects" },
    ];



    return (
        <nav
            className={cn(
                "fixed left-1/2 -translate-x-1/2 z-50 w-full px-2 md:px-0 mx-auto flex justify-center",
                "bottom-2",
                "md:top-6 md:bottom-auto"
            )}
        >
            <Card className="h-16 rounded-lg px-4 py-5 !flex flex-row items-center gap-2 max-w-xl w-full">
                <div className='flex flex-row gap-2'>
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="ghost"
                            size="icon"
                            onClick={() => push(item.path)}
                            className={cn("rounded-full hover:bg-secondary p-5", { "bg-secondary": item.path === pathname })}
                        >
                            <Icon icon={item?.icon} className="!h-6 !w-6 text-muted-foreground" />
                        </Button>
                    ))}
                </div>

                <div className="flex flex-1" />
                <ModeToggle />
                <DownloadResume />
            </Card>
        </nav>
    )
}

export default Navigation