import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-5">
            <h2 className='text-5xl font-bold text-blue-500'>This page is not found</h2>
            <Link href={"/"}>
                <button className="btn btn-primary">Back to Home</button>
            </Link>
            
        </div>
    );
};

export default notFound;