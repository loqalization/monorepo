'use client';

import { Validation } from 'utils';
import { Button } from '@/components/ui/button';

export default function Page() {
    return (
        <div className="flex gap-2 items-center p-4">
            <Button
                variant="default"
                onClick={() => alert(Validation.isEmail('u.akts1@gmail.com'))}
            >
                Test Valid
            </Button>
            <Button
                variant="destructive"
                onClick={() => alert(Validation.isEmail('u.akts1@.com'))}
            >
                Test Invalid
            </Button>
        </div>
    );
}
