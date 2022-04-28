import './UserItem.css'

export default function UserItem({key, children}) {
    return (
        <li className="user-item" id={key}>{children}</li>
    )
}