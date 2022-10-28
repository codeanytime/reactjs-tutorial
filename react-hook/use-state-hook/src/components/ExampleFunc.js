import React, { useState } from 'react'

const init = () => {
    let total = 0;
    for (let i = 0; i < 100; i++) {
        total += i;
    }
    return total;
}

function ExampleFunc() {
    const [count, setCount] = useState(() => init());
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Function component</h1>
            <h2>You click {count} times</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default ExampleFunc
