import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const SKILLS = [
    {
        label: "RAMS",
        thumbnail: <img src="https://alasasit.com/logos/rams-logo.png" alt="rams-logo" width="36" height="36" />,
        desc: "Frontend Development Using React, Redux, MUI and integrating with RESTful APIs.",
        slug: "rams-web-app"
    },
    {
        label: "RAMS Mobile App",
        thumbnail: <img src="https://alasasit.com/logos/rams-logo.png" alt="rams-logo" width="36" height="36" />,
        desc: "Mobile application development using React Native, Redux, Firebase, react-native-paper and integrating with RESTful APIs.",
        slug: "rams-mobile-app"
    },
    {
        label: "VisitTracker",
        thumbnail: <img src="https://alasasit.com/logos/visitrackerl-logo.svg" alt="rams-logo" width="36" height="36" className='aspect-square' />,
        desc: "Frontend Development Using React, Redux, MUI and integrating with RESTful APIs.",
        slug: "visitor-management-system"
    },
    {
        label: "Nomik Legal Website",
        thumbnail: <Image src="https://nomiklegal.com/images/nomic-legal-pllc-logo.svg" alt='nomik logo' width="36" height="36" className='w-10 h-10 aspect-square' />,
        desc: "Backend Development using Node.js, Next.js, Supabase, PostgreSQL, Azure and integrating with RESTful APIs. Deployment on Netlify",
        slug: "nomik-legal-website"
    },
    {
        label: "CI Tech Website",
        thumbnail: <Image src="https://citech.my/images/logos/citech-logo.svg" alt='nomik logo' width="36" height="36" className='w-10 h-10 aspect-square' />,
        desc: "Frontend Development using Node.js, Next.js, ShadCn and integrating with RESTful APIs.",
        slug: "ci-tech-website"
    }
]

export function Projects() {
    return (
        <Card className='flex justify-between p-4 px-2 sm:px-6 shadow-none bg-muted rounded-md'>

            <div className="flex flex-1">
                <span className="text-md text-muted-foreground font-bold flex items-center">
                    <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                    Projects
                </span>
                 <div className="flex flex-1">
                     <Link href="/projects" className="ml-auto text-sm text-muted-foreground hover:underline">
                         View All
                     </Link>
                 </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-1 gap-3'>
                {
                    SKILLS?.slice(0, 3)?.map((skill, index) => (
                        <Link key={index} href={`/projects/${skill?.slug}` || "#"} target={skill?.slug ? "_self" : "_self"} rel="noopener noreferrer">
                            <Card
                                className={cn('w-full flex flex-row px-4 hover:ring-6 hover:ring-muted-foreground/10 transition-shadow duration-500 items-center')}
                                key={index}
                            >
                                <div className='rounded-full border-1 h-16 w-16 aspect-square flex items-center justify-center'>
                                    {skill.thumbnail}
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold'>{skill.label}</h3>
                                    <p className='text-sm text-muted-foreground'>{skill?.desc}</p>
                                </div>
                            </Card>
                        </Link>
                    ))
                }




            </div>

        </Card>
    )
}

export default Projects;