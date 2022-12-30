import s from './Post.module.css'
const Post = (props)=>{
    return(

        <div className={s.post}>
            <img src="https://i.pinimg.com/originals/51/94/29/519429364b68b01b75413cbd71b4de00.jpg" alt="" className={s.profile}/>
            <p>{props.message}</p>
        </div>
    )
}
export default Post