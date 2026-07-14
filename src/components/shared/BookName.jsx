import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [{
    id: "1",
    title: "Atomic Habits"
},
{
    id: "2",
    title: "Think and Grow Rich",
},
{
    id: "3",
    title: "Rich Dad Poor Dad",
},
{
    id: "4",
    title: "Business & Success",
},
{
    id: "5",
    title: "Pride and Prejudice",
},
{
    id: "6",
    title: "The Hobbit",
},
]

const BookName = () => {
    return (
        <div className= " flex items-center gap-2 border border-green-400 p-4   rounded-md container mx-auto my-4">
            <button className="btn bg-green-400 text-xl btn-sm">Book Name</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map(n=>{
                    return <span key={n.id} className="title mx-8 font-semibold">{n.title}</span>; 

                })}
            </Marquee>
        </div>
    );
};

export default BookName;