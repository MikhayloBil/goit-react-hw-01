import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
