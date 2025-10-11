import { Icon } from '@iconify/react';
import { Button } from './ui/button';

function CopyEmail() {

    const handleDownload = () => navigator.clipboard.writeText('suyogsanjeevanpp@gmail.com');

    return (
        <Button
            variant="outline"
            onClick={handleDownload}
            className="hover:bg-muted-foreground/30 cursor-alias"
        >
            <Icon icon="pixelarticons:copy" className="mr-1 h-4 w-4" />
            Copy Email
        </Button>
    )
}

export default CopyEmail