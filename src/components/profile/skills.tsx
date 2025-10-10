"use client"

import { Circle } from 'lucide-react';
import { Badge } from '../ui/badge';

const PROFILE = `Senior Front-End Developer with 4+ years of experience building fast, scalable web and mobile apps. Skilled in React.js, Next.js, Tailwind CSS, Node.js, and React Native. Strong focus on clean architecture, performance, and user experience. Proven leader in delivering quality products and mentoring teams in dynamic, product-driven environments.`

const SkillData = [
    {
        title: "Programming Languages",
        content: `JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS, JSON`
    },
    {
        title: "Tools and Frameworks",
        content: `React.js, Next.js, React Native, Tailwind CSS, Node.js, Expo, Redux, Zustand, Vite, Webpack, Git, GitHub, VS Code, IIS, Postman, Figma, Chrome DevTools`
    },
    {
        title: "Soft Skills",
        content: `Team Leadership, Problem-Solving, Communication,Project Management, Adaptability, Attention to Detail`
    }
]


export function Skills() {
    return (
        <div className='flex flex-col justify-between p-4 px-6 shadow-none bg-background rounded-md'>

            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
                Skills
            </span>

            <div className="flex-1 w-full">

                {
                    SkillData.map((skill, index) => (
                        <div key={index} className="mb-6">
                            <h6 className="text-md sm:text-xl font-bold text-foreground mb-2 mt-8">
                                {skill.title}
                            </h6>
                            <div className="text-muted-foreground text-sm w-full text-justify flex flex-wrap gap-3">
                                {skill.content?.split(',').map((item) => (
                                    <Badge variant="secondary" key={item} className='border-1 border-muted-foreground/10 ' >
                                        {
                                            item.trim()
                                        }
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))
                }



            </div>


        </div>
    )
}

export default Skills;