import './UserItem.css'

export default function UserItem({key, children}) {
    return (
        <li className="user-item">{children}</li>
    )
}