import Column from "../Column/Column"
import columnArray from "../../data/column-array"


export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="row">
                    {columnArray.map((col) => (
                        <Column title={col.title} key={col.id} />
                    ))}
                </div>

            </div>
        </>
    )
}