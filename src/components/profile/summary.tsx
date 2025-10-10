"use client"

import { Circle } from 'lucide-react';

const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps. Skilled in React.js, Next.js, Tailwind CSS, Node.js, and React Native. Strong focus on clean architecture, performance, and user experience. Proven leader in delivering quality products and mentoring teams in dynamic, product-driven environments.`

export function Summary() {
    return (
        <div className='flex flex-col justify-between p-4 px-6 shadow-none bg-background rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
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


        </div>
    )
}

export default Summary;