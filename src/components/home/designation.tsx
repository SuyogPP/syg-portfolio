import { Icon } from '@iconify/react'
import { Badge } from '../ui/badge'

function Designation() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
            <div className='flex gap-2'>
                <span className="text-md text-muted-foreground font-bold flex items-center">
                    <Icon icon="material-symbols:circle" className="mr-2 h-4 w-4 text-muted-foreground" />
                    Senior Frontend Developer</span>
            </div>
            <div className="">
                <Badge variant="outline" className='bg-green-100 text-green-800 font-bold border-none py-1 rounded-full'>
                    <Icon icon="material-symbols:circle" className="mr-2 h-3 w-3 animate-pulse text-green-500" />
                    AVAILABLE FOR WORK
                </Badge>
            </div>
        </div>
    )
}

export default Designation