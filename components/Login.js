import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Login() {

    const router = useRouter;

    const BillTrim = [
        { path: '/signup', label: 'Sign up' },
        { path: '/terms', label: 'Terms of use' },
        { path: '/privacy', label: 'Privacy' },
        { path: '/help', label: 'Help centre' },
    ];


    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="font-bold text-3xl mb-8">
                Log in to BillTrim
            </div>

            <input className="border w-1/4 p-2 mb-2" placeholder="Username " type="text" name="name"></input>
            <input className="border w-1/4 p-2" placeholder="Password" type="password" name="password"></input>
            <Link className="bg-[#0078C8] text-white my-8 w-1/4 text-center p-2" href="">
                Log in
            </Link>
            <div className="flex text-[#0078C8] space-x-8">
                <Link href="">Forget password?</Link>
                <Link href="">Cannot log in</Link>
            </div>

            <div className="flex space-x-4 my-16">
                {BillTrim.map(item => (
                    <span
                        key={item.label}
                        onClick={() => router.push(item.path)}
                        className={`cursor-pointer ${router.pathname === item.path ? 'text-[#1E9AC7]' : 'hover:text-[#0078C8]'}`}
                    >
                        {item.label}
                    </span>
                ))}
            </div>

        </div>
    )
}
