"use client"

import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Copy, PlusCircle } from 'lucide-react';
import DownloadResume from '../download-resume';


const NAME = "Suyog P P";
const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps.
Currently working in Al Asas Information Technology.`;


export function CalltoAction() {

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="flex flex-col items-center justify-center gap-2 !py-8">
            <h1 className="text-xl sm:text-4xl font-bold text-foreground">
                Let’s work together.
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md text-sm text-center">
                {PROFILE}
            </p>
            <div className="flex flex-wrap gap-3">
                <DownloadResume />
                <Button
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText('your.email@example.com')}
                    className="hover:bg-muted-foreground/30 cursor-alias"
                >
                    <Copy className="mr-1 h-4 w-4" />
                    Copy Email
                </Button>
            </div>
        </div>
    )
}

export default CalltoAction