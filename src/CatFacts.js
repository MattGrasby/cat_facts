import React, { useEffect, useState } from 'react';
import CatFactFrame from './CatFactFrame';
import CatFactCat from './CatFactCat';

export default function CatFacts() {
    console.log("*** RENDER CatFacts ***");
    const [facts, setFacts] = useState([]);
    const [fact, setFact] = useState({'id': -1, 'text': 'Click a cat below for a fact!'});

    function handleClick(id, text) {
        setFact({'id': id, 'text': text});
    }

    useEffect(() =>{
        console.log("*** USEEFFECT CatFacts ***")
        async function fetchFacts() {
            let response = await fetch('https://cat-fact.herokuapp.com/facts/');
            response = await response.json();
            
            let factsData = response;
            let newFacts = [];
            for(var i = 0; i < factsData.length; i++) {
                setFacts(oldFacts => [...oldFacts, {'id': i, 'text' : factsData[i].text}]);
            }
            //console.log(facts);
        }  
        fetchFacts();                       
    }, []);

    return (
        <div className="catFacts">
            <CatFactFrame fact={fact}/>
            <div className='catFactCats'>
                {facts.map((fact) => {
                    return <CatFactCat key={fact.id} id={fact.id} text={fact.text} clickMe={handleClick} />
                })}
            </div>
            
        </div>
    )
}