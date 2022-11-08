import React, { useState, useEffect} from 'react'

// neu init value cua state la ham thi dung lamda function de tranh re render ham nhieu lan

function ExampleFunc() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        document.title = `you click ${count} times`;
        console.log('Effect')

        // nen dung clean up function dat trong return cua useEffect
        return () => {
            console.log("Clean up function");
        }
    }, [count])

    useEffect(() => {
        fetch(`https://reqres.in/api/${action}`)
        .then(res => console.log({res}))
        .catch(err => console.log({err}));
    }, [action])

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }
    useEffect(() => {
        //componentDidMount
        document.addEventListener('scroll', handleScroll)
        return () => {
            // componentWillUnmount
            document.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div style={{height: '3000px'}}>
            <h1>Function component</h1>
            <h2>You click {count} times</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => setAction('users')}>Get user</button>
            <button onClick={() => setAction('comments')}>Get comments</button>
            <p style={{position: 'fixed', bottom: '20px', left: '20px'}}>{scrollPosition}</p>
        </div>
    )
}

export default ExampleFunc
