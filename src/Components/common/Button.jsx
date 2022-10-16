
function Button({ itemNumber, active, ActiveCname, Icon, text, textCname, IconCname, ptag, Cname, onClick }) {
    return (
        <button key={itemNumber} className={active === itemNumber ? ActiveCname : Cname} onClick={onClick    }>
            <p className={ptag} >
                <span className={IconCname}> {Icon}</span>
                <span className={textCname}>{text}</span>
            </p>
        </button>
    );
}

export default Button;