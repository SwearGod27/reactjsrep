import s from './Header.module.css'

const Header =()=>{
    return(
        <nav className={s.nav}>
            <a href="#"><img src="https://payload.cargocollective.com/1/9/311022/10730759/liz_moser-moto_mickey-logo-biker_800.jpg" alt=""/></a>
        </nav>
    )
}

export default Header