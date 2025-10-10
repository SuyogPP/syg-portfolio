"use client"

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Circle } from 'lucide-react';
import { Card } from '../ui/card';

const SKILLS = [
    {
        label: "LinkedIn",
        thumbnail: <Icon icon="mdi:linkedin" width="24" height="24" className='text-muted-foreground' />,
        link: "https://linkedin.com/in/suyog-sanjeevan/"
    },
    {
        label: "Github",
        thumbnail: <Icon icon="mdi:github" width="24" height="24" className='text-muted-foreground' />,
        link: "https://github.com/SuyogPP"
    },
    {
        label: "Instagram",
        thumbnail: <Icon icon="mdi:instagram" width="24" height="24" className='text-muted-foreground' />,
        link: "https://instagram.com/su_yog__"
    }
]

export function Contact() {
    return (
        <Card className='flex flex-row justify-between p-4 px-6 shadow-none bg-muted rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
                Follow Me
            </span>

            <div className='grid grid-cols-3 lg:grid-cols-3 gap-3 '>
                {
                    SKILLS?.map((skill, index) => (
                        <Card 
                        className={cn('h-16 w-16 hover:ring-6 hover:ring-muted-foreground/10 transition-shadow duration-500 rounded-full p-0 flex items-center justify-center')} key={index}
                        onClick={() => window.open(skill.link, '_blank', 'noopener,noreferrer')}
                        >
                            {skill.thumbnail}
                        </Card>
                    ))
                }
            </div>

        </Card>
    )
}

export default Contact;