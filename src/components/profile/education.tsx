"use client"

import { cn } from '@/lib/utils';
import { Circle } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../ui/card';

const SKILLS = [
    {
        label: "Bachelor of Technology In Computer Science",
        school: "College of Engineering Thalassery",
        schoolLink: "https://www.cethalassery.ac.in/index-new.php",
        place: "Thalassery, Kerala",
        year: "2015 - 2019"
    }
]

export function Education() {
    return (
        <Card className='flex flex-col justify-between p-4 px-6 shadow-none bg-muted rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
                Education
            </span>

            <div className='w-full flex flex-col'>
                {
                    SKILLS?.map((skill, index) => (
                        <div
                            key={index}
                        >
                            <h6 className="text-md sm:text-xl font-bold text-foreground mb-2">
                                {skill.label}
                            </h6>
                            <p className={cn("text-muted-foreground text-sm w-full text-justify")}>
                                <Link href={skill.schoolLink} target="_blank" rel="noopener noreferrer">
                                    {skill.school} | {skill.place} | {skill.year}
                                </Link>
                            </p>
                        </div>
                    ))
                }
            </div>

        </Card>
    )
}

export default Education;