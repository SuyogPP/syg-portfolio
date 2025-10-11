"use client"

import { Copy } from 'lucide-react';
import DownloadResume from '../download-resume';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';


const NAME = "Suyog P P";
const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps.
Currently working in Al Asas Information Technology.`;


export function HeroSection() {

    return (
        <div className="flex flex-col-reverse sm:flex-row items-start gap-6 mb-8">
            <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    I'm {NAME}
                </h1>
                <p className="text-muted-foreground mb-6 max-w-md text-sm">
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

            <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center border-4 border-background shadow-lg">
                    <Avatar className='size-29'>
                        <AvatarImage src="/avatar-syg.png" className='object-cover' />
                        <AvatarFallback>SYG</AvatarFallback>
                    </Avatar>

                </div>
            </div>
        </div>
    )
}

export default HeroSection