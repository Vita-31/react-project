import './Button.css'

function Button({bg, children}) {
    const bgClass = bg ? `btn--${bg}` : '';
    const classes = [bgClass].filter(Boolean).join(' ')
  return (
    <button className={`btn ${classes}`}>{children}</button>
  )
}

export default Button