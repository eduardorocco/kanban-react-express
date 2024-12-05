import logo from '../../assets/ARDO-logo.png'
import style from './Footer.module.css'

export default function Footer(){
    return(
        <footer className='container'>
            <img src={logo} className={style.footerLogo} alt="logo" />
        </footer>
    )
}