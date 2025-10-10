import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Circle } from "lucide-react";
import { Icon } from "@iconify/react";

export function Experience() {
    const data = [
        {
            title: "2022 to Present",
            content: (
                <div>
                    <h3 className="text-lg text-left font-bold">Senior Software Developer</h3>
                    <h3 className="text-md text-left font-bold text-teal-600">Al Asas Information Technology</h3>
                    <h4 className="text-sm text-left font-bold">Sharjah, UAE</h4>
                    <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        A versatile and hands-on Senior Software Developer leading the frontend team in delivering high-performance web and mobile applications. Proven expertise in full-stack development, deployment, and hardware integrations. Skilled in managing projects from concept to deployment while ensuring code quality, performance, and security.
                    </p>


                </div>
            ),
        },
        {
            title: "2021 to 2022",
            content: (
                <div>
                    <h3 className="text-lg text-left font-bold">Frontend Developer</h3>
                    <h3 className="text-md text-left font-bold text-blue-500">Skyniche Technologies</h3>
                    <h4 className="text-sm text-left font-bold">Ottapalam, Kerala</h4>
                    <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Worked as a React / React Native Developer, developing responsive and fast web applications and mobile applications, using react and react-native. Worked in coordination with developers to create highly interactive web applications.
                    </p>


                </div>
            ),
        },
        {
            title: "2020 to 2021",
            content: (
                <div>
                    <h3 className="text-lg text-left font-bold">Frontend Developer</h3>
                    <h3 className="text-md text-left font-bold text-blue-500">BVOY Technologies</h3>
                    <h4 className="text-sm text-left font-bold">Kannur, Kerala</h4>
                    <p className="my-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Worked as a Web Developer, developing responsive and fast websites and Landing pages. Worked in creating tasteful animations and illustrations for landing pages.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip n p-4 px-2 sm:px-6 shadow-none bg-muted rounded-md">
            <span className="text-md text-muted-foreground font-bold flex items-center">
                <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                Work Experience
            </span>
            <Timeline data={data} />
        </div>
    );
}
