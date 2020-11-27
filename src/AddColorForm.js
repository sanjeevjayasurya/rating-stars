import React, { useState } from 'react'
/*
import React, { useRef } from 'react'
// Uncontrolled component type of forms

export default function AddColorForm({ onNewColor = f => f }) {
    const txtTitle = useRef()
    const hexColor = useRef()

    const submit = e => {
        e.preventDefault()
        const title = txtTitle.current.value
        const color = hexColor.current.value
        onNewColor(title,color)
        txtTitle.current.value = ""
        hexColor.current.value = ""
    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="Enter title" required/>
            <input ref={hexColor} type="color" required />
            <button>Add Color</button>
        </form>
    )
}

*/

export default function AddColorForm({ onNewColor = f => f }) {
    const [title, setTitle] = useState('')
    const [color, setColor] = userState('#000000')

    const submit = e => {
        e.preventDefault()
        onNewColor(title, color)
        resetTitle("")
        resetColor("")
    }

    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Enter title"
                required
            />
            <input
                value={color}
                onChange={e => setColor(e.target.value)}
                type="color"
                required
            />
            <button>Add color</button>
        </form>
    )
}