import './Button.css'

function Buttons({bg, size, outline, border, text}) {
    return (
        <button className={`btn btn-${bg} btn-${size} btn-${outline} btn-border-${border}`}>{text}</button>
    )
}

export default Buttons