import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar =()=>{
    return(
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item } >Профиль</NavLink></li>
                <li><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Диалоги</NavLink></li>
                <li><NavLink to="#" className={s.item }>Новости</NavLink></li>
                <li><NavLink to="#" className={s.item }>Музыка</NavLink></li>
                <li><NavLink to="#"className={s.item }>Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar