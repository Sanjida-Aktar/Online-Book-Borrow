'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navlink = ({href, children}) => {
    
       const pathname = usePathname();
        console.log(pathname)
        const isActive = pathname === href;
        return <Link href={href} className={`${isActive ? 'text-green-700 border-b-2 border-green-700' : ''}`}>{children}</Link>
            
};

export default Navlink;