import './Button.css'

function Button({bg, size, id, children, ...props}) {
    const bgClass = bg ? `btn-${bg}` : '';
    const sizeClass = size ? `btn-${size}` : ''
    const classes = [bgClass, sizeClass].filter(Boolean).join(' ')
  return (
    <button {...props} id={id} className={`btn ${classes}`}>{children}</button>
  )
}

export default Button