import React from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false }) =>
    <FaStar color={selected ? "red" : "gray"} />

const createArray = length => [...Array(length)]

export default function StarRating({ totalStars = 5 }) {
    return createArray(totalStars).map((star, i) => <Star key={i} />)
}