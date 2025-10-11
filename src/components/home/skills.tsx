import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Card } from '../ui/card';
import Link from 'next/link';

const SKILLS = [
    {
        label: "ReactJs",
        thumbnail: <Icon icon="bxl:react" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://react.dev"
    },

    {
        label: "NextJs",
        thumbnail: <Icon icon="lineicons:nextjs" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://nextjs.org"
    },
    {
        label: "JavaScript",
        thumbnail: <Icon icon="bxl:javascript" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        label: "TypeScript",
        thumbnail: <Icon icon="cib:typescript" width="36" height="36" className='text-muted-foreground/80' />,
        link: "https://www.typescriptlang.org/"
    },
    {
        label: "HTML",
        thumbnail: <Icon icon="picon:html" width="36" height="36" className='text-muted-foreground/80' />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        label: "Css",
        thumbnail: <Icon icon="simple-icons:css" width="36" height="36" className='text-muted-foreground/80' />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        label: "Java",
        thumbnail: <Icon icon="ri:java-fill" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://www.oracle.com/java/"
    },
    {
        label: "SQL SERVER",
        thumbnail: <Icon icon="devicon-plain:microsoftsqlserver-wordmark" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://www.microsoft.com/en-us/sql-server"
    },


    {
        label: "Nodejs",
        thumbnail: <Icon icon="mdi:nodejs" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://nodejs.org"
    },
    {
        label: "Tailwind CSS",
        thumbnail: <Icon icon="ri:tailwind-css-fill" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://tailwindcss.com/"
    },
    {
        label: "MUI",
        thumbnail: <Icon icon="simple-icons:mui" width="48" height="48" className='text-muted-foreground/80' />,
        link: "https://mui.com/"
    }
]

function Skills() {
    return (
        <Card className='flex justify-between p-4  px-2 sm:px-6 shadow-none bg-muted rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                My Skills
            </span>
            <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 '>
                {
                    SKILLS?.map((skill, index) => (
                        <Link href={skill.link} target='_blank' className={cn('w-full flex items-center justify-center aspect-square !border-r-1 !border-b-1 border-dashed border-foreground/10', (index + 1) % 6 === 0 ? '!border-r-0' : '', index >= SKILLS.length - 5 ? '!border-b-0' : '')} key={index}>
                            {skill.thumbnail}
                        </Link>
                    ))
                }




            </div>

        </Card>
    )
}

export default Skills;