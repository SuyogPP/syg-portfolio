"use client"

import { Icon } from '@iconify/react';
import { Circle } from 'lucide-react';

const PROFILE = `Discover some of my notable projects that showcase my expertise in front-end development, React.js, Next.js, and more. These projects highlight my ability to create dynamic, user-friendly web applications with a focus on performance and scalability. Explore my work to see how I can bring value to your next project.`

export function Summary() {
    return (
        <div className='flex flex-col justify-between p-4 px-2 sm:px-6 shadow-none bg-background rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                Projects
            </span>

            <div className="flex-1 w-full">
                <h1 className="text-4xl sm:text-3xl font-bold text-foreground mb-2 mt-8">
                    My Works
                </h1>
                <p className="text-muted-foreground text-sm w-full text-justify">
                    {PROFILE}
                </p>
            </div>


        </div>
    )
}

export default Summary;