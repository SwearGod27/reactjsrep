import s from "../Profile.module.css";

const Profileinf = (props) => {
    return (
        <div className={Profileinf}>
            <img className={s.img} src= {props.bgimg}
                 alt=""/>
            <div className={s.profile}>
                <img src={props.profimg} alt=""/>
                <div className={s.about}>
                    <p>{props.profname}</p>
                </div>
            </div>
        </div>
    )
}

export default Profileinf