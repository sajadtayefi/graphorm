import SlideTitle from "./ActiveSlide";

function Button(props) {
    return (
        <>
            <button  key={props.key}  className={props.Cname} onClick={props.onclick}>
                <p className={props.ptag} >
                    {props.state ? "this is not active": "this is  active"}
                    <span className={props.IconCname}> {props.Icon}</span>
                    <span className={props.textCname}>{props.text}</span>
                </p>
            </button>
        </>
    );
}

export default Button;