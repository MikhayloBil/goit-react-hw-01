import './FriendListItem.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={isOnline ? 'status-online' : 'status-offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
