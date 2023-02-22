import { useState, useCallback } from "react";

const mod = (n,m) => ((n % m) + m) % m;

function Questions({ items }) {
    const [index, setIndex] = useState(0);

    const forwards = useCallback(() => 
        setIndex(state => mod(state + 1, items.length))
        , [setIndex, items]);

    const backwards = useCallback(() => 
        setIndex(state => mod(state - 1, items.length))
        , [setIndex, items]);


    return (
        <div >
            <h1>{items[index].label}</h1>
            <div>
                <button onClick={backwards}>Back</button>
            </div>
            <div>
                <button onClick={forwards}>Next</button>
            </div>
        </div>
    );
}

export default Questions;
