import Column from "../Column/Column"
import columnArray from "../../../server/data/column-array"


export default function Main() {
    return (
        <>
            <main className="main-container">
                <div className="row">
                    {columnArray.map((col) => (
                        <Column title={col.title} key={col.id} />
                    ))}
                </div>

            </main>
        </>
    )
}