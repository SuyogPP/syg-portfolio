"use client"

import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Copy, PlusCircle } from 'lucide-react';
import DownloadResume from '../download-resume';
import CopyEmail from '../copy-email';


const NAME = "Suyog P P";
const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps.
Currently working in Al Asas Information Technology.`;


export function CalltoAction() {


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
                <CopyEmail />
            </div>
        </div>
    )
}

export default CalltoAction