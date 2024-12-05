import Column from "../Column/Column"
import axios from 'axios'
const API_BASE_URI = 'http://localhost:3000/'
import { useState, useEffect } from 'react'



export default function Main() {

    const [colArray, setColArray] = useState([])

    console.log(useState([]));

    function getCol() {
        axios.get(API_BASE_URI)
        .then((res) => setColArray(res.data))
    }

    useEffect(() => getCol(), [])

    return (
        <>
            <main className="main-container">
                <div className="row">
                    {colArray.map((col) => (
                        <Column title={col.title} key={col.id} />
                    ))}
                </div>

            </main>
        </>
    )
}