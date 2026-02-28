import React from 'react'
import Button from './ui/neumorph-button'
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
            intent="primary"
            onClick={handleDownload}
            size="small"
        >
            <div className="flex flex-row items-center gap-2">
                <Icon icon={`pixelarticons:arrow-bar-down`} className="h-[1rem] w-[1rem]" />
                Resume
            </div>
        </Button>
    )
}

export default DownloadResume