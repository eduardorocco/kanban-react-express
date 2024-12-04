import NavStyle from './Navbar.module.css'

export default function Navbar() {

    return(
        <>
        <header className="header-container">
            <div className={NavStyle.navbar}>
                <h1>KanDo</h1>
                <button>premimi tutto</button>
            </div>
        </header>
        </>
    )
}