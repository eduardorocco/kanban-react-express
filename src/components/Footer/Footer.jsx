import logo from '/imgs/ARDO-logo.png'
import style from './Footer.module.css'

export default function Footer(){
    return(
        <footer className='container footer'>
            <img src={logo} className={style.footerLogo} alt="logo" />
        </footer>
    )
}