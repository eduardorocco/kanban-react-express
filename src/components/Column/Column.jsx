/* eslint-disable react/prop-types */
import columnStyle from './Column.module.css'

export default function Column({title}) {
    return(
        <>
        <div className="col">
            <div className={columnStyle.card}>
                <div className={columnStyle.title}>{title}</div>
                <div className={columnStyle.body}>
                    <div>fare
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}