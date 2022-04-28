import './Button.css'

function Button({bg, size, children}) {
    const bgClass = bg ? `btn-${bg}` : '';
    const sizeClass = size ? `btn-${size}` : ''
    const classes = [bgClass, sizeClass].filter(Boolean).join(' ')
  return (
    <button className={`btn ${classes}`}>{children}</button>
  )
}

export default Button