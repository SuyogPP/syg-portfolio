import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react';

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
            variant="outline"
            className="rounded-md border-primary text-primary-foreground hover:bg-primary/50"
            onClick={handleDownload}
        >
            <Download />
            Resume
        </Button>
    )
}

export default DownloadResume