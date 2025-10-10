import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Card } from '../ui/card';
import Image from 'next/image';

const SKILLS = [
    {
        label: "RAMS",
        thumbnail: <img src="https://alasasit.com/logos/rams-logo.png" alt="rams-logo" width="36" height="36" />,
        desc: "Rostering and Attendance management system, a complete solution for employee rostering and attendance management."
    },
    {
        label: "RAMS Mobile App",
        thumbnail: <img src="https://alasasit.com/logos/rams-logo.png" alt="rams-logo" width="36" height="36" />,
        desc: "Mobile application for RAMS, enabling geofence based attendance management on the go."
    },
    {
        label: "VisitTracker",
        thumbnail: <img src="https://alasasit.com/logos/visitrackerl-logo.svg" alt="rams-logo" width="36" height="36" className='aspect-square' />,
        desc: "VisitTracker is a web application designed to help businesses manage and track client visits efficiently."
    },
    {
        label: "Nomik Legal",
        thumbnail: <Image src="https://nomiklegal.com/images/nomic-legal-pllc-logo.svg" alt='nomik logo' width="36" height="36" className='w-10 h-10 aspect-square' />,
        desc: "Nomik Legal is a comprehensive legal management platform designed to streamline legal workflows and improve collaboration."
    }
]

export function Projects() {
    return (
        <Card className='flex justify-between p-4 px-2 sm:px-6 shadow-none bg-muted rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                Projects
            </span>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-3'>
                {
                    SKILLS?.map((skill, index) => (
                        <Card className={cn('w-full flex flex-row px-4 hover:ring-6 hover:ring-muted-foreground/10 transition-shadow duration-500 items-center')} key={index}>
                            <div className='rounded-full border-1 h-16 w-16 aspect-square flex items-center justify-center'>
                                {skill.thumbnail}
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold'>{skill.label}</h3>
                                <p className='text-sm text-muted-foreground'>{skill?.desc}</p>
                            </div>
                        </Card>
                    ))
                }




            </div>

        </Card>
    )
}

export default Projects;