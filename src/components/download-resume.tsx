import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react';
import { Icon } from '@iconify/react';

function DownloadResume() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/SYG_resume_oct_2025.pdf'; // Path to your PDF in the public folder
        link.download = 'SYG_resume_oct_2025.pdf'; // The name it will be saved as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            variant="default"
            className="rounded-md"
            onClick={handleDownload}
        >
            <Icon icon={`pixelarticons:arrow-bar-down`} className="h-[1.5rem] w-[1.5rem]" />
            Resume
        </Button>
    )
}

export default DownloadResume