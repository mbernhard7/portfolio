import React, { useState, useEffect } from 'react';
import './SquashContainer.css'
import SquashCard from "./SquashCard";

function SquashContainer(props) {
    props.data.sort((a, b) => (a.text.length < b.text.length) ? 1 : -1);

    const [columns, setColumns] = useState(makeColumns(window.innerWidth));

    useEffect(() => {
        function handleResize() {
            setColumns(makeColumns(window.innerWidth));

        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    function makeColumns(width) {
        let numCols = Math.min(Math.floor((width-96)/320), props.data.length);
        numCols = numCols > 0 ? numCols : 1;
        let newColumns = [...Array(numCols)].map(c => []);
        props.data.forEach((p, i)=> {
                newColumns[i%numCols].push(p);
            }
        )
        return newColumns;
    }

    return <div className='squashRow'>
        {columns.map(col =>
            <div className='squashColumn' key={columns.indexOf(col)}>
                {col.map(p=>
                    <SquashCard round = {props?.round} key={p.title} image={p.image} title={p.title} subtitle={p.subtitle} text={p.text} links={p.links}/>
                )}
            </div>
        )}
    </div>
}

export default SquashContainer;