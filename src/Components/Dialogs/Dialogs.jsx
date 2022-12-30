import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id_;
    return (

        <div className={s.dialog + "" + s.active}>
            <NavLink to={path} className={s.item}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <p className={s.mes}>{props.mess}</p>
    )
}

const Dialogs = () => {
    return (
        <div className={s.main}>
            <div className={s.name}>
                <ul>
                    <li> <DialogsItem name = 'Катя' id_="1"/> </li>
                    <li> <DialogsItem name = 'Витя' id_="2"/> </li>
                    <li> <DialogsItem name = 'Арман' id_="3"/> </li>
                    <li> <DialogsItem name = 'Никита' id_="4"/> </li>

                </ul>
            </div>
            <div className="chat">
                <Message mess={'Как ты ? друг мой '}/>
                <Message mess={'Привет '}/>
                <Message mess={'Скинь ДЗ '}/>
            </div>
        </div>
    )
}

export default Dialogs