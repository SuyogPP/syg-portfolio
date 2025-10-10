"use client"

import { works } from "@/dataset/works.json";
import { Badge } from "../ui/badge";

const PROFILE = `Discover some of my notable projects that showcase my expertise in front-end development, React.js, Next.js, and more. These projects highlight my ability to create dynamic, user-friendly web applications with a focus on performance and scalability. Explore my work to see how I can bring value to your next project.`

export function Summary({ slug }: { slug: string }) {

    const DATA = works?.find((item) => item.slug === slug);

    return (
        <div className='flex flex-col justify-between p-4 px-6 shadow-none bg-background rounded-md'>



            <div className="flex-1 w-full">
                <img src={DATA?.logo || ""} alt="preview" width={64} height={64} className="mt-4 rounded-md" />

                <h1 className="text-4xl sm:text-3xl font-bold text-foreground mb-2 mt-8">
                    {DATA?.title}
                </h1>
                <p className="text-muted-foreground text-sm w-full text-justify">
                    {DATA?.description || ""}
                </p>

                <img src={DATA?.preview || ""} alt="preview" width={500} height={300} className="mt-4 rounded-md" />
                {
                    DATA?.paragraph1 &&
                    <p className="text-muted-foreground text-sm w-full text-justify mt-3">
                        {DATA?.paragraph1 || ""}
                    </p>
                }
                {
                    DATA?.paragraph2 &&
                    <p className="text-muted-foreground text-sm w-full text-justify mt-3">
                        {DATA?.paragraph2 || ""}
                    </p>
                }
            </div>
            <h6 className="text-md sm:text-xl font-bold text-foreground mb-2 mt-8">
                Technologies Used
            </h6>
            <div className="text-muted-foreground text-sm w-full text-justify flex flex-wrap gap-3">
                {DATA?.technologies.map((item, index) => (
                    <Badge variant="secondary" key={index} className='border-1 border-muted-foreground/10 ' >
                        {
                            item.trim()
                        }
                    </Badge>
                ))}
            </div>

            <h6 className="text-md sm:text-xl font-bold text-foreground mb-2 mt-8">
                Platform
            </h6>
            <div className="text-muted-foreground text-sm w-full text-justify flex flex-wrap gap-3">
                {DATA?.platforms.map((item, index) => (
                    <Badge variant="secondary" key={index} className='border-1 border-muted-foreground/10 ' >
                        {
                            item.trim()
                        }
                    </Badge>
                ))}
            </div>
        </div>
    )
}

export default Summary;