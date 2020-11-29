import React, { useState, useEffect } from 'react'
import ColorList from './ColorList.js'
import AddColorForm from './AddColorForm'

function Phrase() {
    const [val, set] = useState("")
    const [phrase, setPhrase] = useState("initial phrase")

    const createPhrase = () => {
        setPhrase(val)
        set("")
    }
    useEffect(() => {
        console.log(`typing "${val}"`);
    }, [val])
    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    }, [phrase])
    return (
        <>
            <label>Favourite phrase</label>
            <input
                type="text"
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
}

export default function App() {
    // Sending state down the component tree
    return (
        <>
            <AddColorForm />
            <ColorList />
            <Phrase />
        </>

    )
}