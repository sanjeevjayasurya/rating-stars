

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

/* 
 *
 *  Using custom hooks
 * */
import React from 'react'
import { useColors } from './ColorProvider'
import { useInput } from './hooks'
export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput('')
    const [colorProps, resetColor] = useInput('#000000')
    const { addColor } = useColors()
    const submit = e => {
        e.preventDefault()
        addColor(titleProps.value, colorProps.value)
        resetTitle("")
        resetColor("")
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="Enter title"
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>Add color</button>
        </form>
    )
}


