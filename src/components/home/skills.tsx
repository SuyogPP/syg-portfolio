import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Circle } from 'lucide-react';
import { Card } from '../ui/card';

const SKILLS = [
    {
        label: "ReactJs",
        thumbnail: <Icon icon="bxl:react" width="48" height="48" className='text-muted-foreground/80' />,
    },

    {
        label: "NextJs",
        thumbnail: <Icon icon="lineicons:nextjs" width="48" height="48" className='text-muted-foreground/80' />,
    },
    {
        label: "JavaScript",
        thumbnail: <Icon icon="bxl:javascript" width="48" height="48" className='text-muted-foreground/80' />,
    },
    {
        label: "TypeScript",
        thumbnail: <Icon icon="cib:typescript" width="36" height="36" className='text-muted-foreground/80' />,
    },
    {
        label: "HTML",
        thumbnail: <Icon icon="picon:html" width="36" height="36" className='text-muted-foreground/80' />,
    },
    {
        label: "Css",
        thumbnail: <Icon icon="simple-icons:css" width="36" height="36" className='text-muted-foreground/80' />,
    },
    {
        label: "Java",
        thumbnail: <Icon icon="ri:java-fill" width="48" height="48" className='text-muted-foreground/80' />,
    },
    {
        label: "SQL SERVER",
        thumbnail: <Icon icon="devicon-plain:microsoftsqlserver-wordmark" width="48" height="48" className='text-muted-foreground/80' />,
    },


    {
        label: "Nodejs",
        thumbnail: <Icon icon="mdi:nodejs" width="48" height="48" className='text-muted-foreground/80' />,
    },
    {
        label: "Tailwind CSS",
        thumbnail: <Icon icon="ri:tailwind-css-fill" width="48" height="48" className='text-muted-foreground/80' />,
    },
    {
        label: "MUI",
        thumbnail: <Icon icon="simple-icons:mui" width="48" height="48" className='text-muted-foreground/80' />,
    }
]

function Skills() {
    return (
        <Card className='flex justify-between p-4 px-6 shadow-none bg-muted rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
                My Skills
            </span>
            <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 '>
                {
                    SKILLS?.map((skill, index) => (
                        <div className={cn('w-full flex items-center justify-center aspect-square !border-r-1 !border-b-1 border-dashed border-foreground/10', (index + 1) % 6 === 0 ? '!border-r-0' : '', index >= SKILLS.length - 5 ? '!border-b-0' : '')} key={index}>
                            {skill.thumbnail}
                        </div>
                    ))
                }




            </div>

        </Card>
    )
}

export default Skills;