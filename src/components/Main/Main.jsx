import Column from "../Column/Column"
import axios from 'axios'
const API_BASE_URI = 'http://localhost:3000/'
import { useState, useEffect } from 'react'
import Task from "../Task/Task"
import InitialColumn from "../Column/InitialColumn"
const initialFormData = {
    task: ''
}



export default function Main() {

    const [colArray, setColArray] = useState([])
    const [formData, setFormData] = useState(initialFormData)


    function getCol() {
        axios.get(API_BASE_URI)
            .then((res) => setColArray(res.data))
    }

    useEffect(() => getCol(), [])
    function handlerFormData(e) {
        setFormData(formData =>
        ({
            ...formData,
            [e.target.name]: e.target.value
        })
        )
    }
    function addTask(e) {
        e.preventDefault()
        console.log(formData)
        setFormData(initialFormData)

    }
    return (
        <>
            <main className="main-container">
                <form onSubmit={addTask} action="">
                    <input onChange={handlerFormData} type="text" name="task" placeholder="inserisci qui la tua task" value={formData.task} />
                    <input type="submit" value='Aggiungi' />
                </form>
                <div className="row">
                    <InitialColumn component={<Task dataTask={formData} />} />
                    {colArray.map((col) => (
                        <Column title={col.title} key={col.id} />
                    ))}
                </div>

            </main>
        </>
    )
}