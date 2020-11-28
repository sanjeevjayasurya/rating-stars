import React, { useState } from 'react'
import colorData from './data/color-data.json'
import ColorList from './ColorList.js'
import AddColorForm from './AddColorForm'

export default function App() {
    const [colors, setColors] = useState(colorData)
    // Sending state down the component tree
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>

    )
}