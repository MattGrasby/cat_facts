import React from 'react';
import './CatFactFrame.css';

export default function CatFactFrame({fact}) {
    console.log("*** RENDER CatFactFrame ***");
    return (
        <div className='catFactFrame'>
            {fact.text}
        </div>
    )
}