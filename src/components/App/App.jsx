import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
const App = () => {
  const user = userData[0];

  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </>
  );
};

export default App;
