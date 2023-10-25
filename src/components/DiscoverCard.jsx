// DiscoverCard.js
import React from 'react';

const DiscoverCard = (props) => {
    const { details } = props;
    const { profile, name, role, batch } = details;

    return (
        <div className="container max-w-xs m-auto my-5 border ring-1 rounded-xl">
            <img src={profile} className="h-4/7 w-full" alt={name} />
            <div className='h-2/7 px-6 text-left'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p>{role}</p>
                <p>{batch}</p>
            </div>
            <button className='h-1/7 relative py-2 bottom-0 w-full mt-4 text-white bg-violet-700 rounded-b-xl'>View Full Profile</button>
        </div>
    );
}

export default DiscoverCard;
