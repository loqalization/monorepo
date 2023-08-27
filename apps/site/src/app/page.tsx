'use client';

import { Validation } from 'utils';

export default function Page() {
    console.log(Validation.isEmail('w'));
    return <div>Page</div>;
}
