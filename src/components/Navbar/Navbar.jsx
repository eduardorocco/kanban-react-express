import NavStyle from './Navbar.module.css'
import logo from '../../assets/ARDO-logo.png'

export default function Navbar() {

    return(
        <>
        <header className="header-container">
            <div className={NavStyle.navbar}>
                <img src={logo} alt="" />
                <button>premimi tutto</button>
            </div>
        </header>
        </>
    )
}