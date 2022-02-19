import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './CatFactCat.css';

export default function CatFactCat({id, text, ...props}) {
    console.log("*** RENDER CatFactCat ***");
    function clickMe(id,text) {
        props.clickMe(id,text);
    }

    return (
        <Button onClick={() => clickMe(id,text)}><img src={`/images/catBtnImage_${id}.png`} width="100" alt={`catBtn_${id}`}/></Button>
    )
}