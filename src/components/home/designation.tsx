import React from 'react'
import { Badge } from '../ui/badge'
import { Circle } from 'lucide-react'

function Designation() {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
                <span className="text-md text-muted-foreground font-bold flex items-center">
                    <Circle className="mr-2 h-3 w-3 animate-pulse text-muted-foreground" />
                    Senior Frontend Developer</span>
            </div>
            <div className="">
                <Badge variant="outline" className='bg-green-100 text-green-800 font-bold border-none py-1 rounded-full'>
                    <Circle className="mr-2 h-3 w-3 animate-pulse text-green-500" />
                    AVAILABLE FOR WORK
                </Badge>
            </div>
        </div>
    )
}

export default Designation