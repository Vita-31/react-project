import './UserBlock.css'

export default function UserBlock({title, desc}) {
  return (
    <div className="userBlock">
        <p className="userTitle">{title}</p>
        {desc && <p className="userDesc">{desc}</p>}
    </div>
  )
}