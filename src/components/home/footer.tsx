"use client"

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Circle } from 'lucide-react';
import { Card } from '../ui/card';


export function Footer() {
    return (
        <Card className='flex flex-row justify-between p-4 px-6 shadow-none bg-muted rounded-md'>
            <span className="text-md text-muted-foreground font-bold flex items-center">
               © 2023 Suyog PP – All Rights Reserved. 
            </span>
        </Card>
    )
}

export default Footer;