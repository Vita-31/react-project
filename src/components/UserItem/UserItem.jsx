import './UserItem.css'

export default function UserItem({user}) {
    return (
        <div className="userItem">
            <div className="userBlock">
                <p className="userTitle">Name:</p>
                <p className="userDesc">{user.name}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Username:</p>
                <p className="userDesc">{user.username}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Email:</p>
                <p className="userDesc">{user.email}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Website:</p>
                <p className="userDesc">{user.website}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Phone:</p>
                <p className="userDesc">{user.phone}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Street:</p>
                <p className="userDesc">{user.address.street}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Suite:</p>
                <p className="userDesc">{user.address.suite}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">City:</p>
                <p className="userDesc">{user.address.city}</p>
            </div>
            <div className="userBlock">
                <p className="userTitle">Zipcode:</p>
                <p className="userDesc">{user.address.zipcode}</p>
            </div>
        </div>
    )
}