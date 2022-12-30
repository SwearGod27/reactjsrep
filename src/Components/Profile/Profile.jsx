import s from './Profile.module.css'
import Post from "./Post/Post";
import Profileinf from "./ProfileINF/ProfileInfo";




const Profile = () => {
    return (
        <div className={s.main}>
            <Profileinf profname={"Petr Avangard"} profimg={"https://i.pinimg.com/originals/51/94/29/519429364b68b01b75413cbd71b4de00.jpg"} bgimg={"https://i.pinimg.com/originals/22/5a/4a/225a4ad1b7acedeff2239370b00655ae.jpg"}/>
            <div className={s.send_post}>
                <textarea></textarea>
                <input type="button" value={"Отправить"}/>
            </div>
            <div className={s.post}>
                <Post message="Так пытаюсь понять эти ваши коммиты"/>
                <Post message="Это пост 2 тут до меня приходит осознание"/>
                <Post message="Это пост 3 вроде въехал"/>
                <Post message="А это что бы окончательно въехать"/>
            </div>
        </div>
    )
}

export default Profile