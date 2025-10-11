"use client"

import { Icon } from '@iconify/react';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import DownloadResume from '../download-resume';
import CopyEmail from '../copy-email';

const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps. Skilled in React.js, Next.js, Tailwind CSS, Node.js, and React Native. Strong focus on clean architecture, performance, and user experience. Proven leader in delivering quality products and mentoring teams in dynamic, product-driven environments.`

export function Summary() {
    return (
        <div className='flex flex-col justify-between p-4 px-2 sm:px-6 shadow-none rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                About
            </span>

            <div className="flex-1 w-full">
                <h1 className="text-4xl sm:text-3xl font-bold text-foreground mb-2 mt-8">
                    It's Me Suyog
                </h1>
                <p className="text-muted-foreground text-sm w-full text-justify">
                    {PROFILE}
                </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
                <DownloadResume />
            </div>

            <Image src="/syg-hero.jpg" alt="syg-photo" height={300} width={300} className='object-cover aspect-square w-full mt-4 rounded-sm' />

        </div>
    )
}

export default Summary;