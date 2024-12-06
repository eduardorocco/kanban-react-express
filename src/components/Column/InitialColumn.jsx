import columnStyle from './Column.module.css'

export default function InitialColumn({ component }) {
    return (
        <div className="col">
            <div className={columnStyle.card}>
                <div className={columnStyle.title}>Da fare</div>
                <div className={columnStyle.body}>

                    {component}

                </div>
            </div>
        </div>
    )
}