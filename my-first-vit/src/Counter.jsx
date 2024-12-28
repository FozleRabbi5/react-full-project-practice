import { useEffect, useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    function handleCount(){
        const newCount = count + 1;
        setCount(newCount);
    }
    function reduce(){
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleCount}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
};