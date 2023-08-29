import { Metadata } from 'next';
import Link from 'next/link';
import { UserAuthForm } from '@/components/auth/user-auth-form';

export const metadata: Metadata = {
    title: 'Loqalization - Sign In',
};

export default function AuthenticationPage() {
    return (
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 xl:grid-cols-3  lg:px-0">
            <div className="xl:col-span-2 col-span-1 relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Loqalization
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-xl">
                            &ldquo; Loqalization is a great tool for developers
                            to get a internationalized website up and running
                            quickly. It&apos;s easy to use and the support is
                            amazing. &rdquo;
                        </p>
                        <footer className="text-sm text-muted">No One</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Sign In
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email and password to continue
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{' '}
                        <Link
                            href="/company/terms-of-service"
                            className="underline underline-offset-4 hover:text-primary"
                            target="_blank"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/company/privacy-policy"
                            className="underline underline-offset-4 hover:text-primary"
                            target="_blank"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
